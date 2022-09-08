const Schema = mongoose.Schema

const Feedbackes = new Schema({
    firstname: String,
    lastname: String,
    mobile: String,
    email: String,
    feedback:String
});

module.exports = mongoose.model('Feedbackes', Feedbackes);