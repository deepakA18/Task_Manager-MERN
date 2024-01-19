const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')

const {getAlltasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

router.route('/',auth).get(getAlltasks).post(createTask);
router.route('/:id',auth).get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;