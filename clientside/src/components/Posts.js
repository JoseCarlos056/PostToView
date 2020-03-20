import React , { useEffect, useState } from 'react';
import { Content, Post } from './Styles/Posts'
import { NewPost } from './NewPost';
import { getPosts } from './functions/UserFunctions';
import io from 'socket.io-client';
export const Posts= (user) =>{
    const socket = io('http://192.168.1.5:5000');
socket.on('teste',(data)=>{
    getPost();
})
    const [posts, setPosts] = useState([]);
    const getPost = async () =>{
       await getPosts(localStorage.token).then(response =>{
           if(response){
            setPosts(response.post.sort((a,b)=>{
                const keyA = new Date(a.createdAt),
               keyB = new Date(b.createdAt)
            if (keyA > keyB) 
            return -1;

            return 0;
        }))
           }
       
       })
    }
    useEffect(()=>{
        getPost();
    },[]);
    return(
        <Content>
            <NewPost { ...user} />
            {posts.map((values)=>{
                return(
                    <Post image={values.user.profileImage}>
                    <div className="profile">
                        <div className="profileInfo">
                            <div className="img">
                            </div>
                            <p>{values.user.name}</p>
                        </div>
                    </div>
                    <div className="contentPost">
                        {values.description}
            <div className="imgPost">
                            <img src={values.imageContent} alt=''></img>
                        </div>
                    </div>
        
                </Post>
                )
            })}
 
    </Content>
    )
}