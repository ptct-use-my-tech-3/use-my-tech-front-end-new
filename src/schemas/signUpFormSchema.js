import * as Yup from 'yup';


export  const signUpFormSchema = Yup.object().shape({
    email: Yup
		.string()
		.email("Must be a valid email address.")
		.required("Must include email address."),
    userType: Yup
        .string()
        .required("Must Select a User Type"),
    password: Yup
		.string()
		.required("Password is Required")
		.min(6, "Passwords must be at least 6 characters long."),
	confirmpassword: Yup
		.string()
		.required("Must re-enter password")
		.oneOf([Yup.ref('password'), null],'Confirm Password: Passwords must match')
});