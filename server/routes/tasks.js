const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')

const {getAlltasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

router.get('/gettasks',auth,getAlltasks)
router.post('/addtask',auth,createTask)
router.get('/gettask/:id',auth,getTask)
router.patch('/updatetask/:id',auth,updateTask)
router.delete('/deletetask/:id',auth,deleteTask);

module.exports = router;