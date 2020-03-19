import React, { useState } from 'react';
import { Content } from './Styles/NewPost'
import { uploadImage, sendPost } from './functions/UserFunctions';
import JwtDecode from 'jwt-decode';
export const NewPost= (user) =>{
    const [imageUploadedApi, setImage] = useState('');
    const [imageUploaded, setimageUploaded] = useState('');
    const [deleteHash, setdeleteHash] = useState('');
    const [description , setDescription] = useState('');
    
    const onChange = (e)=>{
        const text = document.getElementById('inputpost');
            text.style.height = 'auto';
            text.style.height = text.scrollHeight+'px';
            setDescription(e.currentTarget.value)
    }
    const onChangeInput = (e)=>{
            if(!e.target.files[0])
            return;
                 const formData = new FormData();
                 formData.append('image',e.target.files[0]);
                 setimageUploaded(URL.createObjectURL(e.target.files[0]))
                 uploadImage(formData).then(response=>{
                     if(response.status === 200){
                         setdeleteHash(response.data.deletehash)
                        return  setImage(response.data.link);
                     }
                     window.alert('Erro ao realizar o upload')
                     console.log(response, 'repso')
                 })
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        console.log(imageUploadedApi)
        if(!imageUploadedApi){
            setTimeout(() => {
                sendPost({
                    description: description,
                    imageContent: imageUploadedApi,
                    deletehash: deleteHash
                },localStorage.token).then(response =>{
                    if(response)
                    return window.alert(response)
                })
            }, 2000);
        }
        sendPost({
            description: description,
            imageContent: imageUploadedApi,
            deletehash: deleteHash
        },localStorage.token).then(response =>{
            if(response)
            return window.alert(response)
        })
    }
    return(
        <Content image={user.image}>
        <div className="postinput">
            <div className="profileinput">
                <div className="profileInfoinput">
                    <div className="imginput">
                    </div>
                    <p>{user.name}</p>
                   
                </div>
                <div className = 'confirm'>
                    <button type='submit' form="form">Postar</button>
                </div>
            </div>
            <form className="contentPostinput" id= "form" onSubmit={onSubmit}>
               <textarea  onChange={onChange} id='inputpost' value={description} placeholder='Digite uma descrição!' />
               <input type='file' onChange={onChangeInput} />
    {imageUploaded ?   <div className="imgPostinput">
                    <img src={imageUploaded} alt=''></img>
                </div> : null}
  
            </form>

        </div>
    </Content>
    )
}