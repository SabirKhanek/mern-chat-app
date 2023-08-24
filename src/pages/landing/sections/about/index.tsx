import section_bg from './assets/section-bg.svg'
import left_item from './assets/left-item.png'

export default function AboutSection() {
    return (
        <div>
            <div className='relative mx-auto my-0'>
                <div className='absolute z-10 left-1/2  object-cover w-full sm:w-auto'>

                    <img src={section_bg} className='relative -left-1/2' alt="" />
                </div>
            </div>

            <section id="about" className={" bg-white py-20"}>

                <div className="bg-transparent text-black mx-auto my-0 max-w-7xl px-4 grid grid-cols-[0%_100%] md:grid-cols-[40%_60%] items-end">
                    <div className='pr-5'>
                        <img src={left_item} alt="" />
                    </div>

                    <div>
                        <h3 className='text-yellow font-bold text-center sm:text-left text-4xl mb-1'>
                            About Us
                        </h3>
                        <h4 className='text-black text-xl text-center sm:text-left font-semibold mb-3'>
                            We are a group of final year <span className='text-yellow'>Computer Science Students in GCUL</span>
                        </h4>
                        <p className='text-center sm:text-left'>
                            We sensed the need of this platform seeing our fellow mute students and our ambtions to help them and other people like them by providing them a platform which helps them to communicate with other people and share their ideas and thoughts by using Sign Language thus helping us in our mission to make world more accessible through our skills as Developers.
                        </p>
                    </div>
                </div>

            </section>
        </div>

    )
}