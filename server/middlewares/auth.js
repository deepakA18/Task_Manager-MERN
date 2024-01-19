const jwt = require('jsonwebtoken');

const auth = async (req,res,next) => {
try {
    const token = req.headers.authorization?.split(" ")[1];  //extracr jwt from authorization header

    let decodeData = jwt.verify(token, process.env.JWT_SECRET ) //decodes the token 
    req.userId = decodeData?.id;
    next();
} catch (error) {
   return res.status(500).json({err: error})
}
}

module.exports = auth;