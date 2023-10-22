import React from 'react';
import backgroundImage from './assets/pexels-yan-krukau-9010066.jpg'; 
function Hero() {
    const back = `url(${backgroundImage})`; 
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '95vh' }}>
      <div className="absolute top-0 w-full h-full bg-top bg-cover" style={{backgroundImage: back}}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto" data-aos="fade-in">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-semibold text-5xl">
                Feel The <span className="text-red-500">Music</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
              Welcome to Myusiki - Your Platform for Artistry and Music Sharing!<br/>
              Myusiki is the creative hub where artists like you can come together to share their passion for music through captivating events and express themselves in the most unique ways. Whether you're a seasoned musician, an aspiring artist, or simply someone who appreciates the magic of music, Myusiki is your platform to connect, create, and celebrate the power of sound.
<br/>

Let's amplify your creativity on Myusiki!
              </p> 
            </div>
          </div>
        </div>
      </div>
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: '70px', transform: 'translateZ(0px)' }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  );
}

export default Hero;