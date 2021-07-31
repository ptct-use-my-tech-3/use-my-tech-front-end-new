import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from '../actions/loginActions'

const initialState={
    login: {},
    error:'',
    loading:true
}


export const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_START:
            return {...state,loading:true}
        case LOGIN_SUCCESS:
            return{...state,login:action.payload,loading:false}
        case LOGIN_FAILURE:
            return {...state,error:action.payload,loading:false}
        default:
            return state;
    }
}