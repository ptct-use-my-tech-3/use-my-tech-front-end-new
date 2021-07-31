
import {
    SIGNUP_START,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from '../actions/signupActions'



const initialState={
    signUp:{},
    error:'',
    loading:true
}

export const signupReducer=(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP_START:
            return {...state,loading:true}
        case SIGNUP_SUCCESS:
            return {...state,signup:action.payload,loading:false}
        case SIGNUP_FAILURE:
            return {...state,error:action.payload,loading:false}
        default:
            return state;
    }

}