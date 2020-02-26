const express = require('express');
const Users = require('../models/users');
const router = express.Router();

router.post('/register',async(req, res) =>{
const { email } = req.body;
try {
    if(await Users.findOne({ email })){
        return res.status(400).send({ error: 'User already exists'});
    }
    const user = await Users.create(req.body);
    console.log(user)
    user.password = undefined
    console.log(user)
    return res.send({ user })
}catch(err){
    console.log(err)
    res.status(400).send({ error : "Registration failed!"})
}
});
module.exports = app => app.use('/auth', router)