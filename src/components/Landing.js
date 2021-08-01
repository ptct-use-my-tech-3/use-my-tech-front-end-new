
import React from 'react';

import {
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const BlueTextTypography = withStyles({
    root: {
      color: "#0000FF"
    }
  })(Typography);

  const BlackTextTypography = withStyles({
    root: {
      color: "#000000"
    }
  })(Typography);

const paperStyle = {
    padding: 20,
    height: "30%",
    width: "65%",
    margin: "60px auto",
};

const Landing = () => {
    return (
        <div className='container'>

        <Grid>
        
            <Paper elevation={10} style={paperStyle}>
            
            <Grid align="center">
                <BlueTextTypography variant="h2" align="center" color="textPrimary" gutterBottom>Welcome to the Use My Tech Stuff App!</BlueTextTypography>
                    <BlackTextTypography variant="h5" align="center" color="textSecondary" paragraph>
                        Use My Tech Stuff: like AirBnB, but for high end electronics. 
                        Are you tired of paying ridiculous fees for camera and other equipment rentals? 
                        Bypass the middleman and rent from a real person!
                    </BlackTextTypography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                        Signup/Login at the top right of the screen to begin renting items from owners 
                        or list items for rent if your the owner of equipment you wish to post for rent!
                    </Typography>
            </Grid>
           
           </Paper>
        
        </Grid>
        </div>
       
    )
    }

export default Landing
