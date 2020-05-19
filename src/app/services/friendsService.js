const FriendsRepository = require("../repositories/friendsRepository");
const PostsRepository = require("../repositories/postRepository");
module.exports = {
  create: async (data) => {
    const friendsdata = await FriendsRepository.create(data);
    return friendsdata;
  },
  findAll: async (data) => {
    let friendsdata = await FriendsRepository.findAll(data);
    let posts = [];
    posts.push(...(await PostsRepository.getPostsFromUser(data)));
    if (friendsdata && !!friendsdata.length) {
      await Promise.all(
        friendsdata.map(async (friends) => {
          posts.push(
            ...(await PostsRepository.getPostsFromUser({
              user: friends.friend._id,
            }))
          );
        })
      );
      return { friendsdata, posts };
    }
    return { friendsdata, posts };
  },
};
