const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        default: 0
    },
    manager:{
        type: String,
        required: true
    },
    associatedEmployees:{
        type: [String],
        default: function(){return this.manager}
    },
    associatedProjects:{
        type: [String],
        default: []
    }
})
const Departments = mongoose.model('Department',departmentSchema)

module.exports = Departments;