const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
name:{
    type: String,
    require: true
},
email:{
    type: String,
    require: true,
    unique: true,
    lowercase: true,
},
posts : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
}],
friends : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
    }],
password: {
    type: String,
    require: true,
    unique: true,
    select: false,
},
passwordResetToken:
{
    type: String,
    select: false,
},
passwordResetExpires:
{
    type: Date,
    select: false,
},
profileImage:
{
    type: String,
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
const Users = mongoose.model('Users', UserSchema);
module.exports = Users;