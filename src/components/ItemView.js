import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router';

const ItemView = props => {
	const paperStyle = {
		padding: 20,
		width: '50vw',
        height: 'auto',
		margin: '60px auto',
	};

    const imageStyle = {
        width: '50%',
    }

    const descriptionStyle = {
        padding: 20,
        margin: '50px auto',
        textAlign: 'left'
    };

    const [listing, setListing] = useState();

    let {id} = useParams();

    useEffect(() => {
        // GET request for our current item
        setListing(null);
    }, [id]);

    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='left'>
                    {/* {listing.name} */}
                    <h2> Item Name </h2>
                </Grid>

                <Grid align='right'>
                    {/* ${listing.cost} per day */}
                    <h3> $50 per day </h3>
                </Grid>

                <Grid style={descriptionStyle}>
                    {/*<img src={listing.image}/>*/}
                    <Grid align='center'>
                        <img src='https://cb.scene7.com/is/image/Crate/KitchenAidK400BldPstSSS21_VND/$web_pdp_main_carousel_zoom_med$/210326143805/kitchenaid-k400-blender-pstchio.jpg' style={imageStyle}/>
                    </Grid>
                    {/* {listing.description} */}
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </Grid>
            </Paper>

        </Grid>);
}

export default ItemView;
