const Router = require("express")
const router = new Router()
const user_controller = require("../controllers/user_controller")
const authHandler = require("../middleware/authHandler")
const checkRoleHandler = require("../middleware/checkRoleHandler");

router.post('/reg',user_controller.registration)
router.post('/login',user_controller.login)
router.get('/auth',authHandler,user_controller.checkUser)

module.exports = router