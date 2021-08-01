import React, { useEffect, useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import ListingCard from './ListingCard';
import dummyData from '../dummy/listingDummyData';

const ItemsForRent = props => {
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: '75vw',
		margin: '60px auto',
	};

    const [listings, setListings] = useState(dummyData);

    useEffect(() => {
        // Get Listings when components mounts

    }, []);

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <TextField
                    id='search'
                    name='search'
                    placeholder='Search for an item'
                    fullWidth
                />

                <Grid container direction='row' justifyContent='center' alignItems='center'>
                    {
                        listings.map(listing => {
                            return <ListingCard key={listing.id} listing={listing}/>
                        })
                    }
                </Grid>
            </Paper>
        </Grid>
    );
}

export default ItemsForRent;