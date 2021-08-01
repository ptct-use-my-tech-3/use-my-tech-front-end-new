import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { fetchItems } from '../actions/ownerActions';
import { connect } from 'react-redux';
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";


const Owner=(props)=>{
      const {push} = useHistory()

      const paperStyle = {
        padding: 20,
        height: "30%",
        width: "50%",
        margin: "60px auto",
    };

    const btnstyle = { margin: "20px 0" };
      
      // Fetch the currently created items, if any.
      useEffect(() =>{
           props.fetchItems()
      },[])

      const addListing = () => {
        push("/owner/add-listing");
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
      else if(props.listings.length===0){
          return (
            <div className='container'>
               <Grid>             
                <Paper elevation={10} style={paperStyle}>                
                  <Grid align="center">
                     <Typography>
                         <h3>Currently no listings</h3> 

                         <Button
				    	  type="submit"
					      color="primary"
				     	  variant="contained"
					      style={btnstyle}
                          onClick={addListing}
					      fullWidth					
				          >
					      Add Item
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
        listings: state.listingReducer.listings,
        error:state.listingReducer.error,
        loading: state.listingReducer.loading
    }
        
}

const mapDispatchToProps={fetchItems}

export default connect(mapStateToProps,mapDispatchToProps)(Owner)