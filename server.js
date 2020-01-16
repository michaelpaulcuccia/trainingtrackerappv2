const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongoDB Atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB Atlas is working!");
})

//routes
const trainingRouter = require('./routes/training');
const usersRouter = require('./routes/users');

app.use('/training', trainingRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Yeah buddy! It's working over on port: ${port}`)
});