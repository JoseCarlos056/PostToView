import React , { useEffect, useState } from 'react';
import { Content } from './Styles/Posts'
import { NewPost } from './NewPost';
import { getPosts } from './functions/UserFunctions';
export const Posts= (user) =>{
    const [posts, setPosts] = useState([]);
    console.log(posts)
    const getPost = async () =>{
       await getPosts(localStorage.token).then(response =>{
           if(response){
            setPosts(response.post)
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
                    <div className="post">
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
        
                </div>
                )
            })}
 
    </Content>
    )
}