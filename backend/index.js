let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let dotenv = require('dotenv')
let formRouter = require('./Router/formRouter')

dotenv.config();

const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));

app.use('/api/form',formRouter)





mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    })

}).catch((err)=>{
    console.log(err,"hello bhai");
})



