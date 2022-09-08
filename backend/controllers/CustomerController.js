exports.register = async(req, res) => {

    try {

        console.log(req.body)

        const required = ['firstname', 'middlename','lastname', 'mobile', 'email', 'address', 'password'];
        var validate = __._checkFields(req.body, required);
        if (validate != true) throw new Error(validate.message);

        req.body.password = __._hashPass(req.body.password);

        const newCustomer = await Model._create(_Customer, req.body);
        if (!newCustomer) throw new Error('Failed to create your account')
        __.res(res, newCustomer, 200);

    } catch (error) {
        console.log(error)
        __.res(res, error.message, 500);
    }
}

exports.login = async(req, res) => {
    try {

        const required = ['email', 'password'];
        var validate = __._checkFields(req.body, required);
        if (validate != true) throw new Error(validate.message);

        console.log(req.body)

        const condition = {
            email: req.body.email
        }


        const customer = await Model._findOne(_Customer, condition);
        if (!customer) throw new Error('Invalid email or password')


        // Chreck password
        if (!__._comparPass(req.body.password, customer.password)) throw new Error('Invalid Password')

        const customerToken = JWT.sign({
            customer: customer._id
        }, CONFIG.JWT_KEY)

        __.res(res, await __.authResponse(customer, customerToken), 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.updateProfile = async(req, res) => {
    try {

        const customer = await Model._findOne(_Customer, { _id: req.body.id }, {}, false)
        if (!customer) { throw new Error('Customer not found') }

        if (req.body.firstname) {
            customer.name = req.body.firstname
        }
        
        if (req.body.middlename) {
            customer.name = req.body.middlename
        }

        if (req.body.lastname) {
            customer.name = req.body.lastname
        }

        if (req.body.mobile) {
            customer.mobile = req.body.mobile;
        }

        if (req.body.email) {
            customer.email = req.body.email
        }

        if (req.body.address) {
            customer.mobile = req.body.address;
        }

        if (req.body.password) {
            customer.password = __._hashPass(req.body.password)
        }

        // const required = ['name','email'];
        var validate = __._checkFields(req.body, []);
        if (validate != true) throw new Error(validate.message);

        await customer.save()

        __.res(res, customer, 200);


    } catch (error) {
        __.res(res, error.message, 500);
    }
}

exports.resetLink = async(req, res) => {
    try {

        const customer = await Model._findOne(_Customer, { email: req.body.email }, {}, false)
        if (!customer) throw new Error('Customer not found')

        var id = customer._id
        var link = ('http://localhost:3000/reset-password/' + id)

        const mail = {
            to: customer.email,
            subject: 'Reset Password Link',
            template: 'reset-link.html',
            context: {
                subject: 'Reset Password Link',
                link: link
            }
        };

        await _Mail(mail);
        __.res(res, link, 200);

    } catch (error) {
        __.res(res, error.message, 500);
    }
}