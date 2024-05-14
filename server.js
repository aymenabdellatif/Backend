const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const bodyParser = require('body-parser');

const patientsRouter = require('./routes/patients');

const doctorsRouter = require('./routes/doctors');

const appoinmentsRouter = require('./routes/appointments')
const app = express();
const PORT = process.env.PORT || 5001;
 
app.use(cors());
app.use(bodyParser.json());
 

mongoose.connect(

    "mongodb+srv://aymen2001:aymen@aymen.dh4reg9.mongodb.net/?retryWrites=true&w=majority&appName=aymen",

    {

        useNewUrlParser: true,

        useUnifiedTopology: true

    });
const connection = mongoose.connection;

connection.once('open', () => {

    console.log('MongoDB database connection established successfully');
});
 

app.use('/patients', patientsRouter);

app.use('/doctors', doctorsRouter);

app.use('/appointments', appoinmentsRouter)
 
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});