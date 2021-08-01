import axios from 'axios'
import { axiosWithAuth } from '../helpers/axiosWithAuth'


export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const postSignup=(signup,push)=>(dispatch)=>{
    dispatch({type:SIGNUP_START})
    axios.post(`https://use-my-tech-stuff-bw-sra.herokuapp.com/api/auth/register`,signup)
    .then(success=>{
        dispatch({type:SIGNUP_SUCCESS,payload:success.data})
        push('/login')

    })
    .catch(err=>{
        console.log(err)
        dispatch({type:SIGNUP_FAILURE,payload:err.message})
    })
}