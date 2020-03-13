import React from 'react';
import { Content } from './Styles/Posts'
import { NewPost } from './NewPost';
export const Posts= (user) =>{
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