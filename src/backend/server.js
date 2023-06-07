const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv') ////Use packet .env(Doteven)


const routesUrls = require('./routes/routes')
const loginroutesUrls = require('./routes/routes')
const QroutesUrls = require('./routes/QuestionsRoute')
const cors = require('cors')

dotenv.config()

//Connection string

mongoose.connect('mongodb+srv://decicideshikane:CfYqVyGfM7fHoLGS@atlascluster.zngxtjl.mongodb.net/surveyDB?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
console.error('Error connecting to MongoDB:', error); 
});



app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.use('/app', loginroutesUrls)
app.use('/app', QroutesUrls)
app.listen(4000, ()=> console.log("server is up and running"))
