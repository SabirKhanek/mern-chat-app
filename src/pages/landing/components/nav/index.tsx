import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import Button from '../../../../components/button'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export interface NavbarProps {
    className?: string
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



function getNavLinks() {

    return (
        navLinks.map((link, index) => {
            return (
                <a className='hover:text-yellow' key={index} href={link.link}>{link.name}</a>
            )
        })
    )
}

export function Navbar({ className }: NavbarProps) {
    const navigate = useNavigate()
    const [isCollapsed, setCollapsed] = useState(false)
    return (
        <div className={className ? className : 'overflow-x-hidden'}>
            <div className={'bg-black px-4 text-white mx-auto my-0 py-5 max-w-7xl flex justify-between items-center'}>
                <div className='nav-icon'>
                    <img src={logo} width={110} alt="" />
                </div>

                {/* Wider screen navlinks */}
                <div className='sm:flex hidden justify-center items-center content-center gap-4 h-full'>
                    <div className='nav-links flex gap-4'>
                        {getNavLinks()}
                    </div>
                    <div>
                        <Button onClick={() => { navigate('register') }} className='text-black py-2 text-base font-medium px-2'>Sign Up</Button>
                    </div>
                </div>

                {/* Mobile navlinks */}
                <div className='sm:hidden flex'>
                    <button onClick={() => { setCollapsed(!isCollapsed) }} className='text-white'>
                        <div className='p-1 border-2 rounded border-white'>
                            <FaBars className="text-3xl"></FaBars>
                        </div>
                    </button>
                </div>
            </div>
            {
                <div className={'sm:hidden  transition-all ease-in-out duration-200 overflow-hidden h-fit max-h-[1000px] ' + `${isCollapsed ? '!max-h-0' : ''}`}>
                    <div className='flex flex-col items-center gap-4 text-white'>
                        {getNavLinks()}
                        <div className='w-full px-4'><Button onClick={() => { navigate('register') }} className='text-black py-2 text-base font-medium px-2'>Sign Up</Button></div>
                    </div>
                </div>
            }
        </div >

    )
}

