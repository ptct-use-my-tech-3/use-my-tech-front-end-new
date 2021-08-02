import react, {useState, useEffect} from 'react';
import {Grid,
        AppBar,
        Paper,
        Typography,
        TextField,
        FormControlLabel, 
        Button,
        Checkbox} 
        from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import React from 'react';

import ListingFormSchema from '../schemas/ListingFormSchema';

import { createItem } from '../actions/ownerActions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)] : {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));


const CreateListing = props => {
    const classes = useStyles();
    const {push} = useHistory()
    const defaultListing = {
        'id':          '',
        'name':        '',
        'description': '',
        'cost':        0,
        'image':       '', 
        'tags':        ''
    };

    const [listing, updateListing] = useState(defaultListing);
    const [disabled, setDisabled]  = useState(true);

    const [errors, setErrors] = useState(defaultListing);

    const setListingErrors = (name, value) => {
        yup.reach(ListingFormSchema, name)
            .validate(value)
            .then(() => {
                setErrors({...errors, [name] : ''});
            })
            .catch(err => {
                setErrors({...errors, [name] : err.errors[0]});
            })
    }

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(value);
        setListingErrors(name, value);
        updateListing(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        // POST to server
        props.createItem(listing,push)
    };

    // Enable / Disable the Create Listing Button
    useEffect(() => {
        ListingFormSchema.isValid(listing)
            .then(valid => {
                setDisabled(!valid);
            })
    }, [listing]);

    return (
        <form autoComplete='off'>
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component='h1' variant='h4' align='left'>
                            Create a Lisiting
                        </Typography>
                        <Grid container spacing={1} justify='center'>
                            <TextField
                                error={errors.name}
                                required
                                id='listingName'
                                value={listing.name}
                                onChange={handleChange}
                                name='name'
                                placeholder='Enter a Listing Title'
                                label='Listing Title'
                                fullWidth>
                            </TextField>

                            <TextField
                                error={errors.image}
                                required
                                id='listingImage'
                                value={listing.image}
                                onChange={handleChange}
                                name='image'
                                placeholder='Enter a url for image'
                                label='Listing Image'
                                fullWidth
                                multiline
                                rows={8}
                                rowsMax={8}>
                            </TextField>

                            <TextField
                                error={errors.description}
                                required
                                id='listingDescription'
                                value={listing.description}
                                onChange={handleChange}
                                name='description'
                                placeholder='Enter an Item description'
                                label='Listing Description'
                                fullWidth
                                multiline
                                rows={8}
                                rowsMax={8}>
                            </TextField>
                            
                            <TextField
                                error={errors.cost}
                                required
                                id='listingCost'
                                value={listing.cost}
                                onChange={handleChange}
                                type='number'
                                name='cost'
                                placeholder='100'
                                label='Price'>
                            </TextField>

                            <TextField
                                error={errors.tags}
                                required
                                id='listingTags'
                                value={listing.tags}
                                onChange={handleChange}
                                name='tags'
                                label='Tags'
                                fullWidth>
                            </TextField>

                            <Button variant='contained' disabled={disabled} onClick={handleSubmit}> Create Listing </Button>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        </form> 
    );
}


const mapStateToProps=(state)=>{
    return {
        listings:state.listingReducer.listings,
        error:state.listingReducer.error,
        loading:state.listingReducer.loading
    }
}

const mapDispatchToProps ={createItem}

export default connect(mapStateToProps,mapDispatchToProps)(CreateListing);