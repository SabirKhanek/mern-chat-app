import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/button";
import curves from "./assets/hero-bg.svg";

export default function HeroSection() {
  return (
    <section id="home" className="bg-black py-14">
      <div className="bg-black text-[#fff] mx-auto my-0 max-w-7xl px-4 grid grid-cols-[100%_0%] md:grid-cols-[60%_40%] gap-2 items-center">
        <div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-center sm:text-left">
            Let's Talk together!
          </h2>
          <p className="font-light text-base my-3 text-center sm:text-left">
            Introducing "Sign Talk," a revolutionary communication platform
            designed to bridge the gap between mute and non-mute individuals.
            Our app seamlessly translates sign language gestures into spoken
            words, fostering meaningful connections regardless of communication
            abilities. From personal interactions to professional engagements,
            Sign Talk empowers users to express themselves, enhancing
            inclusivity and understanding across various fields and communities.
          </p>
          <div className="mx-4 sm:mx-0 flex gap-5 items-center">
            <Link to={"/home"}>
              <Button
                onClick={() => {}}
                className="text-black font-bold text-lg sm:!w-fit p-3 mt-5"
              >
                Get Started
              </Button>
            </Link>
            <a
              href="https://github.com/SabirKhanek/mern-chat-app/releases/download/plugin/signtalk_interprator_plugin.exe"
              target="_blank"
            >
              <Button className="text-black bg-white font-bold text-lg sm:!w-fit p-3 mt-5">
                Download Interpretor
              </Button>
            </a>
          </div>
        </div>
        <img
          className="relative bottom-0 left-0 w-full h-full"
          src={curves}
          alt=""
        />
      </div>
    </section>
  );
}
