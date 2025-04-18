const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

// REGISTER ENDPOINT
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    console.log('Incoming request body:', req.body);

    // Check if user already exists
    const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with same username or email. Please try a different one.'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save user
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'
    });
    await newlyCreatedUser.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred while registering the user'
    });
  }
}


const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'INVALID USERNAME CREDENTIALS'
        });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({
          success: false,
          message: 'Invalid credentials!'
        });
      }
  
      const accessToken = jwt.sign(
        {
          userId: user._id,
          user: user.username,
          role: user.role
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '15m'
        }
      );
  
      res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        accessToken
      });
  
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: 'Server error during login'
      });
    }
  }
  

module.exports = {
  registerUser,
  loginUser
}
