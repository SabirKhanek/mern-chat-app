import FeatureComponent from "./feature";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"
import feature_images from "./feature_images";
import { useResponsive } from "./useResponive";
import { toast } from "react-toastify";
import { useEffect } from "react";


export default function FeaturesSection() {
    const screenType = useResponsive();
    const responsive: ResponsiveType = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,

        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,

        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,

        }, smallMobile: {
            breakpoint: { max: 463, min: 0 },
            items: 1,
        }
    };

    useEffect(() => {
        if (window.innerWidth < 425) {
            toast('Landing page is not responsive yet for mobile devices. Please view it on a desktop or tablet for better experience.')
        }
    }, []);



    return (
        <section id='services' className="bg-black py-14">
            <div className="bg-black text-[#fff] mx-auto my-0 max-w-7xl">
                <h3 className="text-yellow font-bold text-4xl mb-1">Features</h3>
                <Carousel responsive={responsive} arrows={screenType.screenType !== 'MOBILE'} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={1500} pauseOnHover={true} itemClass="mx-0 my-auto">
                    {(feature_images).map(({ bg_color, description, heading, image }, index) => {
                        return <FeatureComponent key={index} bg_color={bg_color} image={image} heading={heading} description={description} />
                    })}
                </Carousel>
            </div>
        </section >
    )
} 