import Button from '../../../../components/button';
import squiggle from './assets/squiggle.svg';

export default function ContactSection() {
    return (
        <section id='contact' className="bg-[#2c2c2c] py-14 relative">
            <img src={squiggle} className='h-auto -left-10 absolute -top-[40px]' alt="" />
            <div className=" text-[#fff] flex flex-col justify-center items-center mx-auto my-0 max-w-7xl">
                <h3 className="text-yellow font-['Orbitron'] font-semibold text-4xl mb-1">Contact Us</h3>
                <p className="text-[#fff] font-['Orbitron'] font-regular text-base mb-1">We'd love to hear from you!</p>
                <p className=' text-center font-light my-3'>Thank you for your interest in Sign Talk, the revolutionary communication platform that brings people together through the power of sign language. Whether you have questions, suggestions, or simply want to learn more about our innovative app, we're here to help. <br></br><br></br>Have a question about how Sign Talk works? Want to explore partnership opportunities? Ready to share your feedback on the app? Our dedicated team is eager to assist you every step of the way.<br></br><br></br>Feel free to reach out to us via the contact information provided below or by filling out the convenient form. We're excited to hear from you and to continue fostering meaningful connections and inclusivity in communication.</p>
                <Button className='text-black !w-fit px-2 mt-6' onClick={() => { window.open('mailto:goonghaboongha@gmail.com', '_blank') }}>Email Us</Button>
            </div>
        </section>
    )
}