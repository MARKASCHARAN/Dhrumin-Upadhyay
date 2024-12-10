import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi,I'm Dhrumin Upadhyay
            </h1>
            <div className="text-xl md:text-2xl mb-6">
              <TypeAnimation
                sequence={[
                  'ML Enthusiast',
                  2000,
                  'Tech Explorer',
                  2000,
                  'Student Developer',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 mb-8">
              A passionate second-year college student exploring the realms of
              technology and machine learning. I love turning complex problems
              into elegant solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full
              hover:bg-blue-700 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
          
          {/* <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/profile-photo.jpg"
                alt="Profile"
                className="rounded-full shadow-xl"
              />
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;