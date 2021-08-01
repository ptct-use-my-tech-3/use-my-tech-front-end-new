import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
	  minWidth: 275,
	  margin: '50px 20px 20px 20px'
	},
	title: {
	textAlign: 'left'
	},
	pos: {
	  marginBottom: 12,
	},
	paragraph: {
		padding: '10px',
		textAlign: 'left',
	}
  });


const UserHome = () => {
	const classes = useStyles();
	
	return(
		<div>
		<Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant='h4' gutterBottom>My Rentals</Typography>
		<Typography variant='p' gutterBottom>You currently aren't renting any items. Check out what's for rent by clicking <strong>'View Rentals'</strong> below!</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Rentals</Button>
      </CardActions>
    </Card>
	</div>
	)
};

export default UserHome;
