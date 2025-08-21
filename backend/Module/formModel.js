let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    projectDetail:{
        type:String,
        required:true
    }
})

let form = mongoose.model('form',formSchema);
module.exports = form;