import { FaEnvelope } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


export default function FooterSection() {
    return (
        <section className="bg-[#000] pt-5 relative">
            <div className='text-center '>
                <div className='flex justify-center gap-3'>
                    <a href="mailto:goonghaboongha@gmail.com">
                        <FaEnvelope className='text-[#fff] hover:text-yellow'></FaEnvelope>
                    </a>
                    <a href="mailto:goonghaboongha@gmail.com">
                        <FaFacebook className='text-[#fff] hover:text-yellow'></FaFacebook>
                    </a>
                    <a href="mailto:goonghaboongha@gmail.com">
                        <FaInstagram className='text-[#fff] hover:text-yellow'></FaInstagram>
                    </a>
                </div>
                <p className='text-[#fff] font-light text-sm mt-1'>© 2025  SignTalk. All rights reserved.</p>
            </div>
        </section>
    )
}