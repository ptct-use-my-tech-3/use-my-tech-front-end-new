import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
	root: {
		minWidth: 100,
		margin: '50px 20px 20px 20px'
	},
	title: {
	textAlign: 'left'
	},
	
	paragraph: {
		textAlign: 'left'
	},
	dashboardContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	titleCardContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});


const UserHome = (props) => {
	const classes = useStyles();


	const handleClick =(page)=>{
		props.history.push(page);
	}
	return(
		<div>
		<Card>
			<CardContent className={classes.titleCardContainer}>
			<Typography variant='h4' className={classes.title}>Welcome Back</Typography>
			<AccountCircleIcon style={{fontSize: 60 }} color='primary'/>
			</CardContent>
		</Card>
		
		<div className={classes.dashboardContainer}>
		<Card className={classes.root} variant="outlined">
		<CardContent>
			<Typography className={classes.title} variant='h4' gutterBottom>My Rentals</Typography>
			<Typography variant='p' gutterBottom className={classes.paragraph}>You currently aren't renting any items. Check out what's for rent by clicking <strong>'View Rentals'</strong> below!</Typography>
		</CardContent>
		<CardActions>
        <Button variant='outlined' size="small" onClick={()=>handleClick('/rentals')}>View Rentals</Button>
		</CardActions>
    </Card>

	<Card className={classes.root} variant="outlined">
		<CardContent>
			<Typography className={classes.title} variant='h5' gutterBottom>Pending Requests</Typography>
			<Typography variant='p' gutterBottom className={classes.paragraph}>You have no pending rental requests!</Typography>
		</CardContent>
    </Card>
	</div>
	</div>
	)
};

export default UserHome;
