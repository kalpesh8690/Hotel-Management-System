exports.saveMsg = async(req,res) => {
    try {
        console.log(req.body);

        const required = ['firstname','lastname','mobile','email','feedback'];
        
        var validate = __._checkFields(req.body, required);
        if (validate != true) throw new Error(validate.message);
        
        const newMsg = await Model._create(_Feedback, req.body);
        if (!newMsg) throw new Error('Failed send feedback')
        __.res(res, newMsg, 200);
    } catch (error) {
        console.log(error);
    }
}