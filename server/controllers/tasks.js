const schedule = require('node-schedule')
const nodemailer = require('nodemailer')

const Task = require('../model/task')
const User = require('../model/userSchema')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
})

const scheduleReminder = async (taskId, taskTime,userEmail) => {
    schedule.scheduleJob(taskTime, async () => {
        const task = await Task.findById(taskId)
        if(task && !task.completed)
        {
            const mailOptions =  {
                from: process.env.EMAIL,
                to: userEmail,
                subject: "Task Reminder",
                text: `Reminder it's time to do task! - ${task.name}`
            }
            await transporter.sendMail(mailOptions);
            console.log("Email sent!")
        }
    })
}



const createTask = async (req,res) => {

    try {
        const userEmail = req.userEmail;
        const task = await Task.create({...req.body,userEmail});

         scheduleReminder(task._id,task.time,userEmail);  //reminder
        
        res.status(201).json({msg: "Task created successfully!",task });
    } catch (error) {
        res.status(500).json({msg: error})
    } 
}

const getAlltasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


const getTask = async (req,res) => {
    try {
        const id = req.params.id;
        const singleTask = await Task.findById(id) 
        if(!singleTask)
        {
            return res.status(404).json({msg: `No task with id ${id}`})
        }
        res.status(200).json({singleTask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async(req,res) => {
    try {
        const task = await Task.findByIdAndUpdate({_id: req.params.id},req.body,{ //Third property 'options' in mongoose.
            new: true ,    //new - returns the modified document
            runValidators: true    //validate the update operation against the model's schema
 
        });
        if(!task)
        {
            return res.status(404).json({msg: `No task with id ${id}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req,res) => {
    try {
        const id = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask){
            return res.status(404).json({msg: `No task with id ${id}`});
        }
        res.status(200).json({deleteTask})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}


module.exports = {getAlltasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}