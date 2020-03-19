import axios from 'axios';

export const register = dataUser =>{
    return axios(
        {
            method: 'post',
            baseURL: 'http://localhost:5000',
            url: 'auth/register',
            data: dataUser
        }
    ).then(response =>{
        if(response)
        return response.data
    }).catch(err => {
        if(err)
        return {error : "Internal Error"}
    })
}
export const logIn = dataUser =>{
    return axios(
        {
            method: 'post',
            baseURL: 'http://localhost:5000',
            url: 'auth/authenticate',
            data: dataUser
        }
    ).then(response =>{
        if(response)
        return response.data
    }).catch(err => {
        if(err)
        return {error : "Internal Error"}
    })
}
export const UploadImage = image =>{
    return axios(
        {
            method: 'post',
            baseURL: 'https://api.imgur.com',
            url: '3/image/',
            headers:{"Authorization" : "Client-ID 4d2ea9c103ce993", 'content-type': 'multipart/form-data'},
            data: image
        }
    ).then(response =>{
        if(response)
        return response.data
    }).catch(err => {
        if(err)
        return {error : "Internal Error"}
    })
}
export const UpdateUser = (image, token) =>{
    return axios(
        {
            method: 'put',
            baseURL: 'http://localhost:5000',
            url: '/users/',
            headers:{"Authorization" : `Bearer ${token}`},
            data: image
        }
    ).then(response =>{
        if(response)
        return response.data
    }).catch(err => {
        if(err)
        return {error : "Internal Error"}
    })
}
export const sendPost = (data, token) =>{
    return axios(
        {
            method: 'post',
            baseURL: 'http://localhost:5000',
            url: '/posts/',
            headers:{"Authorization" : `Bearer ${token}`},
            data: data
        }
    ).then(response =>{
        if(response)
        return response.data
    }).catch(err => {
        if(err)
        return {error : "Internal Error"}
    })
}