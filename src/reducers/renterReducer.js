import {
    RENTER_START,
    RENTER_FAILURE,
    RENTER_SUCCESS
} from '../actions/renterActions'

const initialState={
    rentedItems:{},
    error:'',
    loading:true
}


export const renterReducer=(state=initialState,action)=>{
    switch(action.type){
        case RENTER_START:
            return {...state,loading:true}
        case RENTER_SUCCESS:
            return {...state,rentedItems:action.payload,loading:false}
        case RENTER_FAILURE:
            return {...state,error:action.payload,loading:false}
        default:
            return state;
    }

}