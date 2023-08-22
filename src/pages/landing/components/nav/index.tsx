import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import Button from '../../../../components/button'

export interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const navigate = useNavigate()
    return (
        <div className={className ? className : 'overflow-x-hidden'}>
            <div className={'bg-black text-[#fff] mx-auto my-0 py-5 max-w-7xl flex justify-between items-center'}>
                <div className='nav-icon'>
                    <img src={logo} width={110} alt="" />
                </div>

                <div className='flex justify-center items-center content-center gap-4 h-full'>
                    <div className='nav-links flex gap-4'>
                        {navLinks.map((link, index) => {
                            return (
                                <a className='hover:text-yellow' key={index} href={link.link}>{link.name}</a>
                            )
                        })}
                    </div>
                    <div>
                        <Button onClick={() => { navigate('register') }} className='text-black py-2 text-base font-medium px-2'>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

const navLinks = [
    {
        name: 'Home',
        link: '#home'
    }, {
        name: 'About',
        link: '#about'
    }, {
        name: 'Services',
        link: '#services'
    }, {
        name: 'Team',
        link: '#team'
    }, {
        name: 'Contact',
        link: '#contact'
    }
]