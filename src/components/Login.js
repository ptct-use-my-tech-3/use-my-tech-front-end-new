import { React, useState, useEffect } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import { signInFormSchema }   from '../schemas/signInFormSchema';
import * as Yup from 'yup'
import { postLogin } from "../actions/loginActions";
import { connect } from "react-redux";

const Login = (props) => {
	// sets paper like style
	const paperStyle = {
		padding: 20,
		height: "70vh",
		width: 380,
		margin: "60px auto",
	};
	// sets button style
	const btnstyle = { margin: "20px 0" };

	// sets state to hold login info
	const [signIn, setSignIn] = useState({
		username: "",
		password: "",
	});

	//holds error state
	const [errors, setErrors]=useState({ 
		email: "",
		password: ""
	})
	//NOTE: add back username and usertype once backend is readty. 

	//
	const[disabled, setDisabled] = useState(true);
	
	const setFormErrors = (name, value)=>{
		Yup.reach(signInFormSchema, name).validate(value)
		.then(()=> setErrors({...errors, [name]:''}))
		.catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
	}

	// updates state with form's data
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormErrors(name, value)
		setSignIn((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// submit token for authentication 
	const handleSubmit = (e) => {
		e.preventDefault()
		props.postLogin(signIn)
		props.history.push('/home')
	
	}

	// disables submit button until form is valid
	useEffect(()=>{
		signInFormSchema.isValid(signIn).then(valid =>{
			setDisabled(!valid)
		})
	}, [signIn])

	return (
		<Grid>
			<form onSubmit={handleSubmit}>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Log In</h2>
				</Grid>

				<TextField
					id="email"
					name="email"
					helperText={errors.email}
					value={signIn.email}
					onChange={handleChange}
					email
					label="Email"
					fullWidth
					required
					mt={9}
				/>

				<TextField
					id="password"
					name="password"
					helperText={errors.password}
					value={signIn.password}
					onChange={handleChange}
					label="Password"
					type="password"
					fullWidth
					required
				/>

				<Button
					type="submit"
					color="primary"
					variant="contained"
					style={btnstyle}
					fullWidth
					disabled={disabled}
				>
					Log In
				</Button>

				<Typography>
					{" "}
					Need an account?
					<Link style={{ marginLeft: "10px" }} href="/signup">
						Sign Up
					</Link>
				</Typography>
				{/* <h2>p tag for login error</h2> */}
				{/* {<p id="errors" className="errors">{errors}</p>}  */}
			</Paper>
			</form>
		</Grid>
	);
};

const mapStateToProps=(state)=>{
	return{
		login:state.loginReducer.login,
		error:state.loginReducer.error,
		loading:state.loginReducer.loading
	}
}

const mapDispatchToProps={postLogin}


export default connect(mapStateToProps,mapDispatchToProps)(Login)