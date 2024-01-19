const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/userSchema')


const signup = async (req,res) => {
    const {email,password} = req.body;
   //existing user , new user:
   try {
    const existingUser =  await User.findOne({email});
    if(existingUser)
    {
        return res.status(409).send({message: "User already exists!"})
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const newUser = await User.create({
        email,
        password: hashedPassword,
    })

    const token = jwt.sign({    //sign method in jwt is used to create a token
        email: newUser.email ,  //1st argument payload object (data of which token is to be created)
        id: newUser._id
    },
    process.env.JWT_SECRET,   //Secret key
    {expiresIn: "15d"});      //propert which define lifespan of token

    res.status(200).json({result: newUser, token});
   } catch (error) {
        res.status(500).json({err: error, message: "Something went wrong..."})
   }
}

const login = async (req,res) => {
    const {email,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser)
        {
            return res.status(404).json({message: "User does not exits!"})
        }
        const correctPassword = await bcrypt.compare(password,existingUser.password);
         if(!correctPassword)
         {
            return res.status(400).json({message: "Invalid Credentials!"})
         }
         const token = jwt.sign(
            {
                email: existingUser.email, 
                id: existingUser._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "15d"
            }
         );
         res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({err: error, message: "Something went wrong..."})
    }
}

module.exports = {signup,login};