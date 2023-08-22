import { Navbar } from "./components/nav"
import AboutSection from "./sections/about"
import ContactSection from "./sections/contact"
import FeaturesSection from "./sections/features"
import FooterSection from "./sections/footer"
import HeroSection from "./sections/hero"
import TeamSection from "./sections/team"

export default function LandingPage() {
    return (
        <div className="bg-black w-full h-full overflow-x-hidden">
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <FeaturesSection></FeaturesSection>
            <TeamSection></TeamSection>
            <ContactSection></ContactSection>
            <FooterSection></FooterSection>
        </div>

    )
}