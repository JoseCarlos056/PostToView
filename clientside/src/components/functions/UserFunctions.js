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