const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')
const Posts = require ('../models/posts')
router.use(authMiddleware);

router.post('/create',async(req, res) =>{
  try{
      const post = await Posts.create({ ...req.body, user: req.userId });
      return res.send({ post})
  } catch (err){
    return res.status(400).send({error: "Internal Error"})
  }

});

router.get('/list',async(req, res) =>{
  try{
    const post = await Posts.find({user: req.userId}).populate('user');
    post.map((x)=>{
      x.user.posts = undefined
      x.user.friends = undefined
    })
    return res.send({ post})
  } catch (err){
    return res.status(400).send({error: "Internal Error"})
  }

});

router.put('/update',async(req, res) =>{
  try{
    const post = await Posts.findByIdAndUpdate(req.query.postId, {description: req.body.description },{ new : true});
    return res.send({ post })
} catch (err){
  return res.status(400).send({error: "Internal Error"})
}
});

router.delete('/delete',async(req, res) =>{
  try{
    console.log(req.query.postId)
   await Posts.findByIdAndDelete(req.query.postId);
    res.send()
  } catch (err){
    return res.status(400).send({error: "Internal Error"})
  }

});
    module.exports = app => app.use('/posts', router)