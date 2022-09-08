const Schema = mongoose.Schema


const Payments = new Schema({
    cust_name: String,
    room_no :Number,
    book_date : Date,
    pay_type : String,
    pay_value : String
});



module.exports = mongoose.model('Payments', Payments);