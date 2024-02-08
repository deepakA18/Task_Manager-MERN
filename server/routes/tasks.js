const express = require('express');
const router = express.Router();

const {getAlltasks,createTask,updateTask,deleteTask} = require('../controllers/tasks')

router.get('/gettasks',getAlltasks)
router.post('/addtask',createTask)
router.patch('/updatetask/:id',updateTask)
router.delete('/deletetask/:id',deleteTask);

module.exports = router;