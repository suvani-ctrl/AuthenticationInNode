//AUTH MIDDLE WARE

const jwt = require('jsonwebtoken')

const authMiddleWare = (req,res,next) =>
{

    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    if(!token)
    {
        response.status(401).json(
            {
                success: false,
                message: 'Access denied. No token provided. Please log in to continue'
            }
        )
    }

    //decode this token

    try{
            const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(decodedTokenInfo)

            req.userInfo = decodedTokenInfo;
            next();

    }
    catch(error){

        return res.status(500).json(
            {
                success: false,

            }
        )

    }
    console.log('auth middle ware is called')
    next();

}

module.exports = authMiddleWare;