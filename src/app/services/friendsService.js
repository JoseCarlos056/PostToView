const FriendsRepository = require("../repositories/friendsRepository");
const PostsRepository = require("../repositories/postRepository");
module.exports = {
  create: async (data) => {
    const friendsdata = await FriendsRepository.create(data);
    return friendsdata;
  },
  findAll: async (data) => {
    let friendsdata = await FriendsRepository.findAll(data);
    let newData = [];
    if (friendsdata) {
      await Promise.all(
        friendsdata.map(async (friends) => {
          const { user, friend } = friends;
          let posts = await PostsRepository.getPostsFromUser({
            user: friends.friend._id,
          });
          let newFriend = {
            user: user,
            friend: friend,
            post: [],
          };
          if (!!posts.length) {
            console.log("tem");
            newFriend.post = posts;
          }

          newData.push(newFriend);
        })
      );
      return newData;
    }
  },
};
