const Schema = mongoose.Schema

const Managers = new Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    mobile: String,
    email: {
        type: String,
        unique: true 
    },
    address: String,
    password: String,
    status: { 
        type: String, 
        enum: ['Active', 'Deactivate'], 
        default: 'Active' 
    }
});

module.exports = mongoose.model('Managers', Managers);