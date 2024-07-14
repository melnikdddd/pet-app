import * as yup from 'yup';

export const signInSchema = yup.object({
    phone: yup.string().required().matches(/^[0-9]{10}$/, 'Phone number is not valid'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters')
})

export const signUpSchema = yup.object({
    phone: yup.string().required().matches(/^[0-9]{10}$/, 'Phone number is not valid'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters'),
    repeatPassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match')
});