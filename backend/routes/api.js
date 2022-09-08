const Router = express.Router();

// ManagerController

Router.post('/manager/login', ManagerController.login)
Router.post('/users', ManagerController.users)
Router.post('/users/one', ManagerController.userOne)
Router.post('/delete/one', ManagerController.deleteOne)
Router.post('/manager/update', ManagerController.updateProfile)
Router.post('/manager/reset-password', ManagerController.resetLink)

// UserController

Router.post('/register', CustomerController.register)
Router.post('/customer/login', CustomerController.login)
Router.post('/customer/update', CustomerController.updateProfile)
Router.post('/customer/reset-password', CustomerController.resetLink)

// RoomController

Router.post('/book',isAuth,RoomController.book)
Router.post('/user/rooms', isAuth, RoomController.userRooms)

// FeedbackController

Router.post('/savemsg',FeedbackController.saveMsg)

module.exports = Router;

async function isAuth(req, res, next) {
    try {
        const isVerified = await __.verifyToken(req)
        if (!isVerified) throw new Error('Unauthorized!')
        next();
    } catch (error) {
        __.res(res, error.message, 401)
    }
}