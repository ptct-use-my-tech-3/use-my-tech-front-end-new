import * as Yup from 'yup';


export  const signUpFormSchema = Yup.object().shape({
    username: Yup
		.string()
		.email("Must be a valid email address.")
		.required("Must include email address."),   
    password: Yup
		.string()
		.required("Password is Required")
		.min(6, "Passwords must be at least 6 characters long."),
	role_name: Yup
        .string()
        .required("Must Select a User Type")	
});