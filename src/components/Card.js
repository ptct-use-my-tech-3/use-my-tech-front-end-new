import React, { useState } from 'react';
import { useHistory } from "react-router";
import { useParams } from 'react-router';
import { deleteItem } from '../actions/ownerActions';
import { connect } from 'react-redux';

const Card=(props) =>{
    const { data } = props;
    
    

    const { push } = useHistory();
        

    const editItem = () => {
        push("/owner/edit-item")
    }

    const handleDelete = (e) => {
        e.preventDefault()   
             
        props.deleteItem(data.item_id)
    }
    
    if (props.listings===null) {
        return (
            <h2>No items to display</h2>
        )
    }
    else {
        return(
            <section className='item-card'>
                <div ><h4>{data.isRented === true ? `Item has been rented by ${data.renter_username}` : 'Item available to rent'}</h4></div>
                <div>
                    
                    <img src={data.item_image}></img>
                </div>
                <div>
                    <h2>{data.item_name}</h2>
                    <p>{`Description: ${data.item_description}`}</p>
                    <p>{`Cost: ${(data.item_cost)}`}</p>
                    <p>{`Tags: ${data.item_tags}`}</p>
                    
                </div>
                <div>
                    
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={editItem}>Edit</button>
                </div>
            </section>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {      
      listings:state.listingReducer.listings,
      error:state.listingReducer.error,
      loading:state.listingReducer.loading      
    }
  };
  
  const mapDispatchToProps = {deleteItem}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);