let form = require('../Module/formModel');

exports.adddata = async (req, res) => {
    try {
        let { name, email, phone, service, projectDetail } = req.body;

        if (!name || !email || !phone || !service=='Select a service' || !projectDetail) {
            return res.send({
                status: 0,
                message: 'All fields are required'
            });
        }

        let data = new form({ name, email, phone, service, projectDetail });
        await data.save();

        console.log(" Sending success response");
        return res.send({
            status: 1,
            message: 'Data added successfully'
        });

    } catch (err) {
        console.log(" Sending error response", err);
        return res.send({
            status: 0,
            message: 'Error to add data',
            data: err
        });
    }
};

exports.getdata=async(req,res)=>{
    try{

    let data = await form.find();
    res.send({
        status: 1,
        message: 'Data added successfully',
        data
    })

    }catch(err){
        console.log(" Sending error response", err);
        res.send({
            status: 0,
            message: 'Error to add data',
            data: err
        });
    }
}

exports.getdatabyid=async(req,res)=>{
    try{
        let data = await form.findById(req.params.id)
        if(!data){
            return res.send({
                status: 0,
                message: 'Data not found'
            })
        }else{
        res.send({
            status: 1,
            message: 'Data added successfully',
            data
        })}



    }catch(err){
        console.log(" Sending error response", err);
        res.send({
                status: 0,
                message: 'Error to add data',
                data: err
        })
    }

}
