const express =  require('express');
const app = express();
const bcrypt = require('bcrypt')

const User = require('./model/userSchema')

const tasks = require('./routes/tasks')
const auth = require('./routes/auth')


const connectDb = require('./db/conn');
const notFound = require('./middlewares/not-found')
require('dotenv').config({path: './routes/.env'})
//middleware
app.use(express.json());  //if we don't use this we'll not have data in req.body.


app.use('/api/v1',auth)
app.use('/api/v1/tasks',tasks);



app.use(notFound);


//app.get('/api/v1/tasks') - to get all the tasks
//app.post('/api/v1/tasks') - to creat a new task
//app.get('/api/v1/tasks/:id') - to get the single task
//app.patch('/api/v1/tasks/:id') - to update a single task
//app.delete('/api/v1/tasks/:id') -to delete a single task

const Port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(Port,()=>{
            console.log(`Server is listening on ${Port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
