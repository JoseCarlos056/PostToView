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
UserSchema.pre('save', async function(next){
const hash = await bcrypt.hash(this.password, 10);
this.password = hash
next();
})
const Posts = mongoose.model('Posts', PostsSchema);
module.exports = Posts;