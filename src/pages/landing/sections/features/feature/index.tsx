import img_shadow from "../assets/img_shadow.png";

export interface FeatureComponentProps {
    bg_color: string; image: string; heading: string; description: string;
}

export default function FeatureComponent({ bg_color, image, heading, description }: FeatureComponentProps) {
    const screenWidth = window.innerWidth;
    const cardWidth = 250;
    const marginLeft = Math.floor((screenWidth - cardWidth) / 2)
    const getMarginLeft = () => {
        if (screenWidth <= 425) {
            return marginLeft
        }
        else {
            return '17%'
        }
    }
    return (
        <div style={{ 'backgroundColor': bg_color || '#3f3f3f', marginLeft: getMarginLeft(), width: cardWidth + 'px' }} className={`my-[20px] overflow-hidden w-[${cardWidth}px] h-[360px] rounded-md`}>

            <div className="relative w-full h-3/5 rounded-md">
                <img className="object-cover h-full rounded-md" src={image} alt="" />
                <img src={img_shadow} className="absolute bottom-0 left-0 object-cover overflow-hidden" alt="" />
            </div>
            <div className="w-full px-3 pt-2">
                <h4 className={`text-yellow font-bold text-base mb-1`}>{heading}</h4>
                <p className={`text-[#fff] font-light text-sm`}>{description}</p>
            </div>
        </div>
    )
}