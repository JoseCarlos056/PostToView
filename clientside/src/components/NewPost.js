import React from 'react';
import { Content } from './Styles/NewPost'
export const NewPost= (user) =>{
    
    const onChange = ()=>{
        var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
        $(this).css({'height':totalHeight});
    }
    }
    return(
        <Content>
        <div className="post">
            <div className="profile">
                <div className="profileInfo">
                    <div className="img">
                    </div>
                    <p>{user.name}</p>
                </div>
            </div>
            <div className="contentPost">
               <textarea  onChange={onChange}/>
    <div className="imgPost">
                    <img alt=''></img>
                </div>
            </div>

        </div>
    </Content>
    )
}