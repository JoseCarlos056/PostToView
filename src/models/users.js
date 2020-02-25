const mongoose = require('../database/index');
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
password: {
    type: String,
    require: true,
    unique: true,
    select: false,
},
createdAt :{
    type: Date,
    default: Date.now,
}

});

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;