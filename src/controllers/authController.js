const express = require('express');
const Users = require('../models/users');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    } )
}


router.post('/register',async(req, res) =>{
const { email } = req.body;
try {
    if(await Users.findOne({ email })){
        return res.status(400).send({ error: 'User already exists'});
    }
    const user = await Users.create(req.body);
    user.password = undefined
    res.send({ user, token:generateToken({id: user.id}) });
}catch(err){
    console.log(err)
    res.status(400).send({ error : "Registration failed!"})
}
});

router.post('/authenticate',async(req, res) =>{
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select('+password');
    if(!user)
        return   res.status(400).send({ error : "User not found"})
    
    if(!await bcrypt.compare(password, user.password))
    return   res.status(400).send({ error : "Invalid passowrd"})
    user.password = undefined
    res.send({ user, token:generateToken({id: user.id}) });
    });
module.exports = app => app.use('/auth', router)