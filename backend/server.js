//server.js
const express = require('express');//express ??
const cors = require('cors');//cors ??
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;//on port
//middle ware
app.use(cors());
app.use(express.json());//parse json

//databse uri 
//mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connect("mongodb+srv://indrayani:Saiswami@25@cluster0.rinta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


/* const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
}); -tried no use*/ 

//like importing
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

//starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});