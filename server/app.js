const express =  require('express');
const app = express();
const cors = require('cors')
const tasks = require('./routes/tasks')

const connectDb = require('./db/conn');
const notFound = require('./middlewares/not-found')
require('dotenv').config({path: './routes/.env'})
//middleware
app.use(cors());
app.use(express.json());  //if we don't use this we'll not have data in req.body.


app.use(express.urlencoded({extended: true}))

app.use('/',tasks);

app.use(notFound);


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
