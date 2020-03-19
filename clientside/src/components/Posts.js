import React , { useEffect } from 'react';
import { Content } from './Styles/Posts'
import { NewPost } from './NewPost';
import { getPosts } from './functions/UserFunctions';
export const Posts= (user) =>{
    const getPost = async () =>{
       await getPosts(localStorage.token).then(response =>{
           console.log(response)
       })
    }
    useEffect(()=>{
        getPost();
    },[]);
    return(
        <Content>
            <NewPost { ...user} />
        <div className="post">
            <div className="profile">
                <div className="profileInfo">
                    <div className="img">
                    </div>
                    <p>Name</p>
                </div>
            </div>
            <div className="contentPost">
                Description
    <div className="imgPost">
                    <img alt=''></img>
                </div>
            </div>

        </div>
    </Content>
    )
}