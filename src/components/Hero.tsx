import React from 'react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import zenwashvideo from '../assets/zenwashvideo.mp4';

interface HeroProps {
  onComingSoonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onComingSoonClick }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
  <video
  autoPlay
  loop
  muted
  playsInline
  webkit-playsinline="true"
  className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover z-0"
>

  <source src={zenwashvideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white px-4 mt-20">
        {/* Big Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
          ZENWASH
          <br />
          <span className="block sm:inline">.IN</span>
        </h1>

        {/* Button */}
       <button
  className="
    ml-20 -mt-10
    md:-mt-16
    bg-[#E7643A] text-white font-semibold
    px-4 py-2 text-sm
    md:px-14 md:py-4 md:text-xl
    rounded-lg hover:bg-[#cf4e26]
    transition-colors duration-200
    max-w-fit
  "
  onClick={onComingSoonClick}
>
  COMING SOON
</button>


        {/* Bottom Texts */}
        <div className="mt-16 flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-10 w-full max-w-5xl text-white font-medium text-xl sm:text-3xl relative z-20">
          <h2>ZEAL</h2>
          <h2>EXCELLENCE</h2>
          <h2>NEATNESS</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
