import google_logo from '../../../public/google.png'
import github_logo from '../../../public/github-logo.png'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import { loginSchema } from '../../schemas/forms/login'
import { login } from '../../services/auth/auth.service'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const loginStatus = await login(values.email, values.password)
                if (loginStatus) {
                    toast('Logged in!')
                } else {
                    toast('Invalid username or password')
                }
            } catch (err) {
                toast('Something went wrong.')
            }
        },
        validationSchema: loginSchema
    })
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formik.isValid) {
            toast('Check your fields.')
        }
        formik.handleSubmit(event)
    }

    return (
        <>
            <div className='w-full shrink-1 mb-7'>
                <h2 className="font-bold text-2xl text-center">Welcome back!</h2>
            </div>
            <form onSubmit={handleFormSubmit} autoComplete='off'>
                <div className="input-field mb-7">
                    <label htmlFor="email" className="text-md text-[#7C838A] block font-medium m-1">Email</label>
                    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id='email' type="text" placeholder="Enter your Email here" className={(formik.errors.email && formik.touched.password ? "error " : "") + "rounded-2xl w-full px-3 py-2 bg-gray-200 [&.error]:border [&.error]:border-red-500 [&.error]:bg-red-50"} />
                    {formik.errors.email && formik.touched.email && <p className='text-red-400'>{formik.errors.email}</p>}
                </div>
                <div className="input-field mb-7">
                    <label htmlFor="password" className="text-md text-[#7C838A] block font-medium m-1">Password</label>
                    <input id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder="Enter your Password here" className={(formik.errors.password && formik.touched.password ? "error " : "") + "rounded-2xl w-full px-3 py-2 bg-gray-200 [&.error]:border [&.error]:border-red-500 [&.error]:bg-red-50"} />
                    {formik.errors.password && formik.touched.password && <p className='text-red-400'>{formik.errors.password}</p>}
                </div>
                <button type='submit' className={(formik.isValid ? "active " : "") + "w-full bg-[#F9ED32] py-2 text-2xl font-bold rounded-lg mb-2 [&.active]:hover:rotate-1 cursor-not-allowed [&.active]:cursor-pointer [&.active]:hover:scale-105 transition-all duration-100"} onSubmit={handleFormSubmit as any}>
                    Login
                </button >
            </form>
            <p className="font-sans mb-5">Don't have an account? <Link to={'/register'} className="text-[#F9ED32] cursor-pointer hover:font-semibold">Sign Up</Link></p>
            <p className="text-center text-2xl text-slate-400 my-5"> - OR -</p>
            <div className='flex gap-1 md:gap-3 lg:gap-4'>
                <div className='flex rounded-2xl border border-black items-center gap-1 p-1 basis-1/2 cursor-pointer' onClick={featureNotImplemented}>
                    <img src={google_logo} width='33' height='33' alt="" />
                    <p>Sign in with Google</p>
                </div>
                <div className='flex rounded-2xl border border-black items-center gap-1 p-1 basis-1/2 cursor-pointer' onClick={featureNotImplemented}>
                    <img src={github_logo} width='33' height='33' alt="" />
                    <p>Sign in with Github</p>
                </div>
            </div>
        </>
    )
}


function featureNotImplemented() {
    toast('This feature is in development.')
}