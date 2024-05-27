const express = require('express');
const router = express.Router();

const {getAlltasks,getSingleTask,createTask,updateTask,deleteTask} = require('../controllers/tasks')

router.get('/tasks',getAlltasks)
router.get('/tasks/:id', getSingleTask)
router.post('/tasks',createTask)
router.patch('/tasks/:id',updateTask)
router.delete('/tasks/:id',deleteTask);

module.exports = router;