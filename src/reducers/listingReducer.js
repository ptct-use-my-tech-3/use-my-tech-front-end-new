

import {
    LISTING_START,
    LISTING_FAILURE,
    LISTING_SUCCESS
} from '../actions/ownerActions'


const initialState={
    listings:{},
    error:'',
    loading:true
}

export const listingReducer=(state=initialState,action)=>{
    switch(action.type){
        case LISTING_START:
            return {...state,loading:true}
        case LISTING_SUCCESS:
            return {...state,listings:action.payload,loading:false}
        case LISTING_FAILURE:
            return {...state,error:action.payload,loading:false}
        default:
            return state;
    }
}