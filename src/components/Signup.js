import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
	FormControl,
	FormLabel,
	Radio,
	RadioGroup,
	FormControlLabel,

} from "@material-ui/core";
import { signUpFormSchema }   from '../schemas/signUpFormSchema'
import * as Yup from 'yup'

import { postSignup } from "../actions/signupActions";
import { connect } from "react-redux";



const Signup = (props) => {

	const {push} = useHistory()
	
	// sets styling of paper background
	const paperStyle = {
		padding: 20,
		height: "70vh",
		width: 380,
		margin: "60px auto",
	};

	const radioStyling ={
		margin: '30px auto',
		display: 'flex',
		textAlign: 'left'
	}
	// sets style of button
	const btnstyle = { margin: "20px 0" };

	// holds state to sign up
	const [signUp, setSignup] = useState({
		username: "",
		password: "",
		role_name: ""
		
	});

	//holds error state
	const [errors, setErrors]=useState({ 
		
		username: "",
		password: "",
		role_name: ""	
	
	})
	

	//
	const[disabled, setDisabled] = useState(true);

	//
	const setFormErrors = (name, value)=>{
		Yup.reach(signUpFormSchema, name).validate(value)
		.then(()=> setErrors({...errors, [name]:''}))
		.catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
	}

	// updates state with form's data
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormErrors(name, value)
		setSignup((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//
	const handleSubmit = (e) =>{
		e.preventDefault();
		props.postSignup(signUp,push)

	}

// disables submit button until form is valid
	useEffect(()=>{
		signUpFormSchema.isValid(signUp).then(valid =>{
			setDisabled(!valid)
		})
	}, [signUp])
	return (
		
		<Grid>
			<form onSubmit={handleSubmit}>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Sign Up</h2>
				</Grid>
				
				<TextField
					id="username"
					name="username"
					helperText={errors.username}
					value={signUp.username}
					onChange={handleChange}
					email
					label="Email/Username"
					fullWidth
					required
				/>
				
				<TextField
					id="password"
					name="password"
					helperText={errors.password}
					value={signUp.password}
					onChange={handleChange}
					label="Password"
					type="password"
					fullWidth
					required
				/>


			<FormControl component="fieldset" style={radioStyling}>
					<FormLabel component="legend" >Account Type</FormLabel>
					<RadioGroup aria-label="account type" name="role_name" value={signUp.value} onChange={handleChange}>
						<FormControlLabel value="owner" control={<Radio />} label="Owner" />
						<FormControlLabel value="renter" control={<Radio />} label="Renter" />
					</RadioGroup>
				</FormControl>
				
				<Button
					type="submit"
					color="secondary"
					variant="contained"
					style={btnstyle}
					fullWidth
					disabled={disabled}
				>
					Sign up
				</Button>

				<Typography>
					{" "}
					Already have an account?
					<Link style={{ marginLeft: "10px" }} href="/login">
						Log In
					</Link>
				</Typography>
			</Paper>
			</form>
		</Grid>
	);
};

const mapStateToProps=(state)=>{
	return {
		signUp:state.signupReducer.signUp,
		error: state.signupReducer.error,
		loading:state.signupReducer.loading		
	}
}

const mapDispatchToProps ={postSignup}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
