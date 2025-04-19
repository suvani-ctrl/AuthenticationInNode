const express = require('express')
const router = express.Router();
const {registerUser,loginUser,changePassword} = require('../controllers/auth-controller')
//all routes are related to user authentication and authorizations
const authMiddleWare = require('../middleware/auth-middleware')

router.post('/register', registerUser);
router.post('/login',loginUser);
router.post('/change-password',authMiddleWare,changePassword)

module.exports = router;