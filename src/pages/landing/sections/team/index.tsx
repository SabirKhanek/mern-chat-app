import Carousel, { ResponsiveType } from "react-multi-carousel";
import {useRef} from 'react'
import squiggle_1 from './assets/squiggle_1.svg'
import MemberCard from './member-card'
import membersData from './membersData'

import { useResponsive } from "./useResponive";

export default function TeamSection() {
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
            breakpoint: { max: 767, min: 500 },
            items: 2,

        }, smallMobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
        }
    };
    const carouselRef = useRef(null);
    return (
        <section id="team" className="bg-black py-14 relative">
            <img className="absolute -right-5 w-28 h-auto -top-[25px]" src={squiggle_1} alt="" />

            <div className=" text-[#fff] px-4 mx-auto my-0 max-w-7xl">
                <h3 className="text-yellow font-bold text-4xl mb-1">Team</h3>
                <Carousel ref={carouselRef} responsive={responsive} arrows={screenType.screenType !== 'MOBILE'} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={1300} pauseOnHover={true} itemClass="mx-0 my-auto">
                    {
                        membersData.map((member, i) => {
                            return (
                                <MemberCard key={i} container_ref={carouselRef} name={member.name} image={member.image} designation={member.designation} facebookLink={member.facebookLink} githubLink={member.githubLink} linkedinLink={member.linkedinLink}></MemberCard>
                            )
                        })
                    }
                </Carousel>
            </div>
        </section>
    )
}