const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')

const User = require('../model/userSchema'); // Import your User model
const Task = require('../model/task'); // Import your Task model


// Create a Nodemailer transporter using your email service provider credentials

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'deepakagashe50@gmail.com',
      pass: process.env.PASS,
    },
  });
// Schedule a job to send email reminder at a specific time

const mail = async (req,res) =>{
    const {email,name,time} = req.body;
    try {
        const decodedToken = jwt.verify(req.token, process.env.JWT_SECRET);
    if (decodedToken.exp < Date.now() / 1000) {
      return res.status(401).json({ msg: 'Token expired' });
    }

    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(404).send({msg: "User not found!"})
    }

    const task = await Task.findOne({name});
    if(!task)
    {
        return res.send("Task not found!");
    }

    schedule.scheduleJob(time, async () => {
       
        // const mailOptions = {
        //     from: 'deepakagashe50@gmail.com',
        //     to: email,
        //     subject: 'Task Reminder',
        //     text: `Reminder: ${name}`,
        //   };
      
        //   const info = await transporter.sendMail(mailOptions);
        //   await Task.findOneAndUpdate({ _id: task._id }, { $set: { completed: true } })

          console.log({msg: "Email sent"})
        })
    } catch (error) {
        return res.status(500).json({err: error,msg: "Internal server error!"})
    }
    
} 

module.exports = mail;