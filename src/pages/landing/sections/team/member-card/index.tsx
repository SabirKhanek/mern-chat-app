import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export interface MemberCardProps {
    name: string; designation: string[]; image: string; facebookLink?: string; githubLink?: string; linkedinLink?: string; container_ref?: any
}

export default function MemberCard({ name, designation, image, facebookLink, githubLink, linkedinLink, container_ref }: MemberCardProps) {
    const screenWidth = window.innerWidth;
    const cardWidth = 250;
    const marginLeft = Math.floor((screenWidth - cardWidth) / 2)
    const getMarginLeft = () => {
        if (container_ref.current?.containerRef?.current?.clientWidth) {
            return Math.floor((container_ref.current?.containerRef?.current?.clientWidth - cardWidth) / 2)
        }
        if (screenWidth <= 1000) {
            return marginLeft
        }
        else {
            return '17%'
        }
    }
    return (
        <div style={{ marginLeft: getMarginLeft(), width: cardWidth + 'px' }} className={`my-[20px] flex flex-col overflow-hidden bg-[#3f3f3f] h-[360px] rounded-md`}>

            <div className="relative shrink-0 grow-0 w-full h-3/5 rounded-md">
                <img className="object-cover w-full h-full rounded-md" src={image} alt="" />
            </div>
            <div className="flex flex-col grow-1 h-full justify-between">
                <div className="w-full px-3 pt-2 flex flex-col justify-center items-center">
                    <h4 className={`text-yellow font-bold text-base mb-1`}>{name}</h4>
                    <p className={`text-[#fff]  font-light text-sm`}>
                        {designation.map((d: string, i: number) => {
                            if (i === designation.length - 1) {
                                return <span key={i}>{d}</span>
                            }
                            else {
                                return (
                                    <span key={i}>
                                        <span>{d}</span>
                                        <span className='text-yellow px-2'>|</span>
                                    </span>
                                )
                            }
                        })}
                    </p>
                </div>
                <div className="flex justify-center mb-3 items-center gap-2">
                    {facebookLink && <a href={facebookLink} target='_blank'><FaFacebook className="hover:text-yellow"></FaFacebook></a>}
                    {githubLink && <a href={githubLink} target='_blank'><FaGithub className="hover:text-yellow"></FaGithub></a>}
                    {linkedinLink && <a href={linkedinLink} target='_blank'><FaLinkedin className="hover:text-yellow"></FaLinkedin></a>}
                </div>
            </div>
        </div>
    )
}
