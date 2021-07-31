import {axiosWithAuth} from '../helpers/axiosWithAuth'

// actions to be dispatched when the owner makes a http request in the UI
export const LISTING_START = 'LISTING_START'
export const LISTING_SUCCESS = 'LISTING_SUCCESS'
export const LISTING_FAILURE = 'LISTING_FAILURE'

// fetches all the items of the owner
export const fetchItems=()=>(dispatch)=>{
    dispatch({type:LISTING_START})
    axiosWithAuth().get(`/api/items/`)
    .then(success=>{
        console.log(success)
        dispatch({type:LISTING_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LISTING_FAILURE,payload:err})
    })
}

// allow the owner to create an item for listing
export const createItem=(item)=>(dispatch)=>{
    dispatch({type:LISTING_START})
    axiosWithAuth().post(`/api/items/`,item)
    .then(success=>{
        console.log(success)
        dispatch({type:LISTING_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LISTING_FAILURE,payload:err})
    })
}


// allow owner to delete an item
export const deleteItem=(item_id)=>(dispatch)=>{
    dispatch({type:LISTING_START})
    axiosWithAuth().delete(`/api/items/${item_id}`)
    .then(success=>{
        console.log(success)
        dispatch({type:LISTING_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LISTING_FAILURE,payload:err})
    })
}


// allow owner to update an item
export const updateItem=(id,item)=>(dispatch)=>{
    dispatch({type:LISTING_START})
    axiosWithAuth().put(`/api/items/${id}`,item)
    .then(success=>{
        console.log(success)
        dispatch({type:LISTING_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:LISTING_FAILURE,payload:err})
    })
}







