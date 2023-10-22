import React from 'react';

function ContactHeaderSection() {
  return (
    <section className="pb-20 relative block bg-black text-white">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: '80px', transform: 'translateZ(0px)' }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white uppercase">
              Contact Us
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4">
              Contact us to ask any questions, acquire a membership, talk to our trainers, or anything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeaderSection;
