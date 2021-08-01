import axios from 'axios'
import jwtDecode from 'jwt-decode'


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin=(login,push)=>(dispatch)=>{
    dispatch({type:LOGIN_START})
    axios.post(`https://use-my-tech-stuff-bw-sra.herokuapp.com/api/auth/login`,login)
    .then(success=>{
        
        dispatch({type:LOGIN_SUCCESS,payload:success.data})
        localStorage.setItem('token',success.data.token)
        const decode = jwtDecode(success.data.token)
       if(decode.role_name ==='owner'){
           push('/owner')
       }
       else if(decode.role_name === 'renter'){
           push('/renter')
       }
       
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LOGIN_FAILURE,payload:err})
        push('/login')
    })
}