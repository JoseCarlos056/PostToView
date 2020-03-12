const UserRepository = require('../repositories/userRepository');

module.exports = {
    update : async (data)=>{
        const userData = await UserRepository.update(data)
        return userData;
    }
}