
import {axiosWithAuth} from '../helpers/axiosWithAuth'

export const RENTER_START = 'RENTER_START'
export const RENTER_SUCCESS = 'RENTER_SUCCESS'
export const RENTER_FAILURE = 'RENTER_FAILURE'

// fetch available items for the renter to rent
export const fetchAvailableItems=()=>(dispatch)=>{
    dispatch({type:RENTER_START})
    axiosWithAuth().get(`/api/users/available`)
    .then(success=>{
        console.log(success)
        dispatch({type:RENTER_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:RENTER_FAILURE,payload:err})
    })
}

// fetch items rented by the renter
export const fetchRentedItems=()=>(dispatch)=>{
    dispatch({type:RENTER_START})
    axiosWithAuth().get(`/api/users/rented`)
    .then(success=>{
        console.log(success)
        dispatch({type:RENTER_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:RENTER_FAILURE,payload:err})
    })
}

// rent a specific item
export const rentItem=(item_id,rented)=>(dispatch)=>{
    dispatch({type:RENTER_START})
    axiosWithAuth().put(`/api/available/${item_id}`,rented)
    .then(success=>{
        console.log(success)
        dispatch({type:RENTER_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:RENTER_FAILURE,payload:err})
    })
}


