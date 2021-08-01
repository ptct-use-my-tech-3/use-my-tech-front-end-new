import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { fetchRentedItems } from '../actions/renterActions';
import { connect } from 'react-redux';
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography	
} from "@material-ui/core";


const Renter=(props)=>{
      const {push} = useHistory()

      const paperStyle = {
        padding: 20,
        height: "30%",
        width: "50%",
        margin: "60px auto",
    };

    const btnstyle = { margin: "20px 0" };
      
      // Fetch the currently rented items, if any.
      useEffect(() =>{
           props.fetchRentedItems()
      },[])

      const seeAvailable = () => {
        push("/availableItems");
      }

      if(props.loading){
          return(
            <div className='container'>      
            <Grid>             
                <Paper elevation={10} style={paperStyle}>                
                <Grid align="center">
                    <Typography>
                        <h3>Loading ...</h3>                        
                    </Typography>                   
                </Grid>               
               </Paper>           
            </Grid>
            </div>
          )
      }
      else if(props.rentedItems.length===0){
          return (
            <div className='container'>
               <Grid>             
                <Paper elevation={10} style={paperStyle}>                
                  <Grid align="center">
                     <Typography>
                         <h3>Currently no rented items</h3> 

                         <Button
				    	  type="submit"
					      color="primary"
				     	  variant="contained"
					      style={btnstyle}                          
					      fullWidth	
                          onClick={seeAvailable}				
				          >
					      See available items
				         </Button>                       
                      </Typography>                   
                  </Grid>               
                </Paper>           
               </Grid>
           </div>
          )
      }
}

const mapStateToProps=(state)=>{
    return {
        rentedItems: state.renterReducer.rentedItems,
        error:state.renterReducer.error,
        loading: state.renterReducer.loading
    }
        
}

const mapDispatchToProps={fetchRentedItems}

export default connect(mapStateToProps,mapDispatchToProps)(Renter)