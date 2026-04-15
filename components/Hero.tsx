import HeroContent from "./HeroContent";
import Ribbon from "./Ribbon";

function Hero() {
  return (
    <div className="relative w-full flex   h-screen overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        z-1
        className="w-full h-full object-cover brightness-50  absolute"
      >
        <source src="/HeroBg.webm" type="video/webm" />
      </video>

      <HeroContent></HeroContent>
      <Ribbon></Ribbon>
    </div>
  );
}

export default Hero;
