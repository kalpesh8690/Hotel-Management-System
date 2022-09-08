exports.book = async(req,res) => {
    try {
        const required = ['cust_name','booked_date','from_date','end_date'];
        const condition = {
            user: req.Auth._id
        }

        var validate = __._checkFields(req.body,required);
        if(validate !=  true) throw new Error(validate.message);

        const newRoom = await Model._create(_Room,condition,{}, req.body)
        if(!newRoom) throw new Error('fail to book room')
        
        __.res(res,newRoom,200);

    } catch (error) {
        __.res(res,error.message,500);
    }
}

exports.userRooms = async(req, res) => {
    try {

        const condition = {
            user: req.Auth._id
        }

        const rooms = await Model._find(_Room, condition, {}, false);
        if (!rooms) throw new Error('Rooms not found!')


        __.res(res, rooms, 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}