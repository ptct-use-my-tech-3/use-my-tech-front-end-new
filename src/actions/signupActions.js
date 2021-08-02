import axios from 'axios'


export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const postSignup=(signup,push)=>(dispatch)=>{
    dispatch({type:SIGNUP_START})
    axios.post(`https://use-my-tech-stuff-bw-sra.herokuapp.com/api/auth/register`,signup)
    .then(success=>{
        dispatch({type:SIGNUP_SUCCESS,payload:success.data})
        alert("Registration successful!!")
        push('/login')

    })
    .catch(err=>{
        alert("Registration failed!!")
        dispatch({type:SIGNUP_FAILURE,payload:err.message})
    })
}