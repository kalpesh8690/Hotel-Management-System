const { Mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Rooms = new Schema({
    cust_name: String,
    room_no: Number,
    room_type: String,
    booked_date: Date,
    from_date: Date,
    end_date: Date,
    price: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    createdAt: { type: String, default: Date.now() },
    updatedAt: { type: String, default: Date.now() }
})

module.exports = mongoose.model('Rooms', Rooms);