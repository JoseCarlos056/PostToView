const FriendsRepository = require('../repositories/friendsRepository');

module.exports = {
    create : async (data)=>{
        const friendsdata = await FriendsRepository.create(data)
        return friendsdata;
    },
    findAll : async (data)=>{
        const friendsdata = await FriendsRepository.findAll(data)
        return friendsdata;
    }
}