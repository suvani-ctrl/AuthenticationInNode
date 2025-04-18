const express = require('express');
const authMiddleWare = require('../middleware/auth-middleware');
const router = express.Router(); 
const adminMiddleWare = require('../middleware/admin-middleware')

router.get('/admin-page', authMiddleWare,adminMiddleWare,(req, res) => {
    res.status(200).json({
        message: "hello admin"
    });
});

module.exports = router;
