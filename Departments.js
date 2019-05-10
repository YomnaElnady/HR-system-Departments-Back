const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Depatrments = require('./models/Department');
const router = require('./routes/departmentRoutes');
app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());

app.use('/Departments', router);


Depatrments.insertMany([
    {
        name: "Analysis",
        capacity:20,
        manager:"Ahmed"
    },
    {
        name: "Implementation",
        capacity:30,
        manager:"Kamal"
    },
    {
        name: "Design",
        capacity:5,
        manager:"Manal"
    },
    {
        name: "Testing",
        capacity:10,
        manager:"soha" 
    }
])
.then(response => console.log(response))
.catch(error => console.log(error));


mongoose.connect('mongodb://localhost/HR-System', {useNewUrlParser: true} )
.then(() => console.log('connected to db successfully'))
.catch((err) => console.log(err));


app.listen(8000, () => console.log('listeninig for requests...'));