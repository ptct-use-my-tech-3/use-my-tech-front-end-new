import axios from 'axios'


export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const postSignup=(signup)=>(dispatch)=>{
    dispatch({type:SIGNUP_START})
    axios.post(`/api/auth/register`,signup)
    .then(success=>{
        dispatch({type:SIGNUP_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:SIGNUP_FAILURE,payload:err})
    })
}