const express = require('express');
const Depatrments = require('C:/Users/zeinab/Desktop/JavaScript/Departments-Pages/models/Department');

const router = express.Router();


router.get('/getDepartmentsData', async (req,res) => {

    try{
    const Department = await Depatrments.find();
    console.log(Department)
    res.send(Department);
    }
    catch(error){
        console.log(error.message)
    }
});

router.get('/getDepartmentData/:name', async (req,res) => {
    try{
    const Department = await Depatrments.find(req.params);
    if(Department.length===0){
        res.status(404).send('This department is not exist, please enter a valid name..');
        return;
    };
    res.send(Department);}
    catch(error){
        console.log(error.message)
    }
});

router.post('/addNewDepartment', async (req,res) => {
try{
    const Department = await Depatrments.find({name: req.body.name});
    if(Department){
        res.send('This department is already exists');
        return;
    };
    const result = await Depatrments.create(req.body);
    res.send(result)
}
catch(error){
    console.log(error.message);
}
});

router.delete('/deleteDepartment/:name', async (req,res) => {
try{
    const Department = await Depatrments.find({name: req.params.name});
    console.log(Department);

    if(Department.length===0){
        res.send('This department is not exist');
        return;
    };
    const deletedDepartment = await Depatrments.findByIdAndRemove(Department[0]._id);
    console.log(deletedDepartment);
    res.send(deletedDepartment);
}
catch(error){
    console.log(error.message);
}

});

router.put('/updateDepartment/:name', async (req,res) => {
    try{
        const Department = await Depatrments.find({name: req.params.name});
        console.log(Department);
    
        if(Department.length===0){
            res.send('This department is not exist');
            return;
        };
        const updatedDepartment = await Depatrments.findByIdAndUpdate(Department[0]._id,{
            $set: {
                capacity: req.body.capacity,
                manager: req.body.manager
            }
        });
        console.log(updatedDepartment);
        res.send(updatedDepartment);
    }
    catch(error){
        console.log(error.message);
    }
    
    })

module.exports = router;