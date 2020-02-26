const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs')
const PostsSchema = new mongoose.Schema({
content:{
    type: String,
},
description : {
    type: String,
    require: true
},
user : {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Users',
  require: true,
},
createdAt :{
    type: Date,
    default: Date.now,
}

});

const Posts = mongoose.model('Posts', PostsSchema);
module.exports = Posts;