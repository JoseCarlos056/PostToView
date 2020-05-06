const FriendsModel = require('../models/friends');

module.exports = {
    create: (data) => {
        return FriendsModel.create(data)
            .then(response => {
                return true;
            }).catch(err => {
                console.log(err)
            })
    },
    findAll: (data) => {
        console.log(data)
        return FriendsModel.find(data).populate(['user', 'friend'])
            .then(response => {
                const filterResponse = response.map((x) => {
                     x.user.posts = undefined;
                     x.user.friends = undefined;
                     x.user.messages = undefined;
                    return x;
                })
                console.log(response)

                return response;
            }).catch(err => {
                console.log(err)
            })
    }
}