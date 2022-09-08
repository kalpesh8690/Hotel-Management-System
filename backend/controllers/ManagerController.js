exports.login = async(req, res) => {
    try {

        const required = ['email', 'password'];
        var validate = __._checkFields(req.body, required);
        if (validate != true) throw new Error(validate.message);


        const condition = {
            email: req.body.email
        }


        const manager = await Model._findOne(_Manager, condition);
        if (!manager) throw new Error('Invalid email or password')


        // Chreck password
        if (!__._comparPass(req.body.password, manager.password)) throw new Error('Invalid Password')

        const managerToken = JWT.sign({
            manager: manager._id
        }, CONFIG.JWT_KEY)

        __.res(res, await __.authResponse(manager, managerToken), 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.users = async(req, res) => {
    try {

        const users = await Model._find(_User)
        if (!users) throw new Error('Users not found')
        __.res(res, users, 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.userOne = async(req, res) => {
    try {

        const user = await Model._findOne(_User, { _id: req.body.id })
        if (!user) throw new Error('User not found')
        __.res(res, user, 200);


    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.updateProfile = async(req, res) => {
    try {

        const manager = await Model._findOne(_Manager, { _id: req.body.id }, {}, false)
        if (!manager) { throw new Error('Manager not found') }

        if (req.body.firstname) {
            manager.name = req.body.firstname
        }
        
        if (req.body.middlename) {
            manager.name = req.body.middlename
        }

        if (req.body.lastname) {
            manager.name = req.body.lastname
        }

        if (req.body.mobile) {
            manager.mobile = req.body.mobile;
        }

        if (req.body.email) {
            manager.email = req.body.email
        }

        if (req.body.address) {
            manager.mobile = req.body.address;
        }

        if (req.body.password) {
            manager.password = __._hashPass(req.body.password)
        }

        // const required = ['name','email'];
        var validate = __._checkFields(req.body, []);
        if (validate != true) throw new Error(validate.message);

        await manager.save()

        __.res(res, manager, 200);


    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.deleteOne = async(req, res) => {
    try {


        const customer = await Model._findOne(_Customer, { _id: req.body.id }, {}, false)
        if (!customer) throw new Error('Customer not found')

        customer.delete()
        __.res(res, "Deleted", 200);


    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.resetLink = async(req, res) => {
    try {

        const manager = await Model._findOne(_Manager, { email: req.body.email }, {}, false)
        if (!manager) throw new Error('Manager not found')

        var password = manager.password
        var id = manager._id
        var link = ('http://localhost:3000/reset-password/' + id)
        _Mail.sendMail(manager.email, 'reset link', 'Click here', link);
        __.res(res, link, 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}