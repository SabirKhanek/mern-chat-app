
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

import { signupSchema } from '../../schemas/forms/signup'
import { signup } from '../../services/auth/auth.service'

export default function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const signupStatus = await signup(values.name, values.email, values.password)
                if (signupStatus) {
                    toast('Now you can login.'); navigate('/login')
                }
            } catch (err) {
                toast('Something went wrong.')
            }
        },
        validationSchema: signupSchema
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
                <h2 className="font-bold text-2xl text-center">Create your Free Account</h2>
            </div>
            <form onSubmit={handleFormSubmit} autoComplete='off'>
                <div className="input-field mb-7">
                    <label htmlFor="name" className="text-md text-[#7C838A] block font-medium m-1">Full Name</label>
                    <input id='name' value={formik.values.name} onChange={formik.handleChange} type="text" placeholder="Enter your Full Name here" className={(formik.errors.name && formik.touched.name ? "error " : "") + "rounded-2xl w-full px-3 py-2 bg-gray-200 [&.error]:border [&.error]:border-red-500 [&.error]:bg-red-50"} />
                    {formik.errors.name && formik.touched.name && <p className='text-red-400'>{formik.errors.name}</p>}
                </div>
                <div className="input-field mb-7">
                    <label htmlFor="email" className="text-md text-[#7C838A] block font-medium m-1">Email</label>
                    <input id='email' value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Enter your Email here" className={(formik.errors.email && formik.touched.email ? "error " : "") + "rounded-2xl w-full px-3 py-2 bg-gray-200 [&.error]:border [&.error]:border-red-500 [&.error]:bg-red-50"} />
                    {formik.errors.email && formik.touched.email && <p className='text-red-400'>{formik.errors.email}</p>}
                </div>
                <div className="input-field mb-7">
                    <label htmlFor="password" className="text-md text-[#7C838A] block font-medium m-1">Password</label>
                    <input type='password' id='password' value={formik.values.password} onChange={formik.handleChange} placeholder="Enter your Password here" className={(formik.errors.password && formik.touched.password ? "error " : "") + "rounded-2xl w-full px-3 py-2 bg-gray-200 [&.error]:border [&.error]:border-red-500 [&.error]:bg-red-50 focus:ring-0 "} />
                    {formik.errors.password && formik.touched.password && <p className='text-red-400'>{formik.errors.password}</p>}
                </div>
                <button type='submit' className={(formik.isValid ? "active " : "") + "w-full bg-[#F9ED32] py-2 text-2xl font-bold rounded-lg mb-2 [&.active]:hover:rotate-1 cursor-not-allowed [&.active]:cursor-pointer [&.active]:hover:scale-105 transition-all duration-100"} onSubmit={handleFormSubmit as any}>
                    Create Account
                </button >
            </form>
            <p className="font-sans mb-5">Already have an account? <Link to={'/login'} className="text-[#F9ED32] cursor-pointer hover:font-semibold">Log in</Link></p>
            <p className="text-center text-2xl text-slate-400 my-5"> - OR -</p>
            <div>
                <div className='flex gap-1 md:gap-3 lg:gap-4'>
                    <div className='flex rounded-2xl border border-black items-center gap-1 p-1 basis-1/2 cursor-pointer' onClick={featureNotImplemented}>
                        <img src={"/google.png"} width='33' height='33' alt="" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className='flex rounded-2xl border border-black items-center gap-1 p-1 basis-1/2 cursor-pointer' onClick={featureNotImplemented}>
                        <img src={"/github-logo.png"} width='33' height='33' alt="" />
                        <p>Sign up with Github</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function featureNotImplemented() {
    toast('This feature is in development.')
}