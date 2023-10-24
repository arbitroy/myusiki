import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={require('./assets/pretty_girl.jpg')}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
            <div className="md:pr-12">
              <small className="text-red-500">About the group</small>
              <h3 className="text-4xl uppercase font-bold">Artistry and community</h3>
              <p className="mt-4 text-lg leading-relaxed">
              Myusiki Foundation fulfills the long-awaited dream of connecting artists, fans, and music enthusiasts in a vibrant community. It emerged from a deep desire for a platform to sing and a recognition of the challenges faced by emerging artists in finding an audience. Our mission is to nurture young talents, enabling every musical soul to reach their full potential. We aspire to provide a supportive community for artists of all scales, fostering the creation of transformative music that empowers everyone.                     </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;