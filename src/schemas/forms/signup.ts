import * as yup from 'yup';

const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_]).{8,}$")

export const signupSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().matches(passwordPattern, 'Password must be at least 8 characters long and include a combination of lowercase letters, uppercase letters, and digits.').required('Password is required')
})