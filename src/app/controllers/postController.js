const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')
router.use(authMiddleware);

router.post('/',async(req, res) =>{
  res.send({status: 'Ok', user : req.userId})
});

    module.exports = app => app.use('/posts', router)