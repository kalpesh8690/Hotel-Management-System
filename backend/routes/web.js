const Router = express.Router();


Router.get(['/', '/home', '/index'], (req, res) => {


    _User.find()
    .then((users) => {
        // console.log('users',users)
    })
    res.send('This is the Home Page')

});

Router.get('/register', (req, res) => {
    const data = {
        name: 'Devid Warner',
        email: 'devid5@mail.com',
        photo: 'https://m.cricbuzz.com/a/img/v1/192x192/i1/c170635/david-warner.jpg',
        password: '123123'
    }

    const saveUser = new _User(data);
    
    saveUser
        .save()
        .then((savedUser) => {
            console.log('New User', saveUser)
            res.status(201).send('Welcome ' + saveUser.name)
        })
        .catch((err) => {
            console.log('Error', err)
            res.status(500).send('Failed to create your account')
        })
})

Router.get('/login', (req, res) => {

    _User
    .findOne({email: 'devid@mail.com', password : 123123})
    .select('name email photo -_id')
    .then((user) => {
        console.log(user)
    })
    .catch ((err) => {
        console.log('User not found', err)
    })

    res.send('this is the login page')
})

Router.get('/delete', (req, res) => {

    _User.findOneAndDelete({email: 'devid4@mail.com'})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log('fail to  delete ', err)
    })
    res.send('this is the delete page')
})
Router.get('/update', (req, res) => {
    _User.findOneAndUpdate({email: 'devid@mail.com'},{name: 'Devid 2'})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log('fail to  update ', err)
    })
    res.send('this is the update page')
})


module.exports = Router;

