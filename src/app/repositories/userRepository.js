const UserModel = require('../models/users');

module.exports = {
    update : (data)=>{
       return  UserModel.findByIdAndUpdate(data.userId , {profileImage: data.newProfileImage})
        .then(response =>{
            return true;
        }).catch(err =>{
            console.log(err)
        })
    }
}