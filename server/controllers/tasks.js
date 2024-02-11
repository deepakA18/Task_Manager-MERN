const Task = require('../model/task')

const createTask = async (req,res) => {

    try {
        const {name} = req.body;

        if(!name)
        {
            return res.status(400).json({ errors: [{ msg: "Task name is required!" }] });
        }
        const task = await Task.create({
            name: name,
            time: req.body.time,
        });
        await task.save();
        res.status(201).json({msg: "Task created successfully!",task });
    } catch (error) {
        res.status(500).json({msg: error})
    } 
}

const getAlltasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        //Converted json data to string while fetching
        const formattedTasks = tasks.map((task) => ({
            _id: task._id,
            name: task.name,
            time: new Date(task.time).toLocaleString(),
            completed: task.completed,
          }));
          res.status(200).json(formattedTasks);
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
    updateTask,
    deleteTask
}