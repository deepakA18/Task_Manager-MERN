const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Authorization token not provided" });
    }

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!decodeData || !decodeData.id) {
      return res.status(401).json({ error: "Invalid token or user ID not present" });
    }

    const user = await User.findById(decodeData.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.userEmail = user.email;
    req.userId = decodeData.id;

    console.log("User Email from auth middleware:", req.userEmail);
    console.log("User ID from auth middleware:", req.userId);

    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = auth;
