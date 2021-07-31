import axios from 'axios'


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin=(login)=>(dispatch)=>{
    dispatch({type:LOGIN_START})
    axios.post(`/api/auth/login`,login)
    .then(success=>{
        
        dispatch({type:LOGIN_SUCCESS,payload:success.data})
        localStorage.setItem('token',success.data.token)
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LOGIN_FAILURE,payload:err})
    })
}