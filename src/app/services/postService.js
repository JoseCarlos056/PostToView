const PostRepository = require('../repositories/postRepository');

module.exports = {
    create : async (data)=>{
        const postData = await PostRepository.create(data)
        return postData;
    }
}