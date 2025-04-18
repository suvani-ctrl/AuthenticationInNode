const express = require('express');
const authMiddleWare = require('../middleware/auth-middleware');
const router = express.Router();  // ✅ create a router

// Define a GET route
router.get('/welcome', authMiddleWare, (req, res) => {
  res.json({
    message: 'Welcome to the home page',
  
  });
});



module.exports = router;  // ✅ export the router properly
