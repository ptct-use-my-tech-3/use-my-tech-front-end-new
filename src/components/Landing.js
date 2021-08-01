
import React from 'react';

import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";

const paperStyle = {
    padding: 20,
    height: "30%",
    width: "50%",
    margin: "60px auto",
};

const Landing = () => {
    return (
        <div className='container'>

        <Grid>
        
            <Paper elevation={10} style={paperStyle}>
            
            <Grid align="center">
                <Typography>
                    
                <h1>Welcome to the Use My Tech Stuff App!</h1>
                <p>
                    <strong>
                    Use My Tech Stuff: like AirBnB, but for high end electronics. 
                    Are you tired of paying ridiculous fees for camera and other equipment rentals? 
                    Bypass the middleman and rent from a real person!
                    </strong>                   
                </p>
                <p>
                    <strong>
                        Signup/Login at the top right of the screen to begin renting items from owners 
                        or list items for rent if your the owner of equipment you wish to post for rent!
                    </strong>
                </p>

                </Typography>
               
               
            </Grid>

           
           </Paper>
        
        </Grid>
        </div>
       
    )
    }

export default Landing
