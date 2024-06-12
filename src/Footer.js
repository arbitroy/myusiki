import React from 'react';
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: '80px', transform: 'translateZ(0px)' }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Follow us on social media</h4>
            <h5 className="text-lg mt-3 mb-2 text-gray-700">
              Find us on any of these platforms, we respond in 1-2 business days.
            </h5>
            <div className="mt-6 flex w-18 justify-between">
              <SocialIcon url="https://twitter.com/OffMyusiki" target="_blank"/>
              <SocialIcon url="https://www.facebook.com/profile.php?id=61552608153411" target="_blank"/>
              <SocialIcon url=" https://whatsapp.com/channel/0029VaCdhgWCnA7nsEdw0H2I" target="_blank"/>
              <SocialIcon url="https://www.tiktok.com/@myusiki.official?is_from_webapp=1&sender_device=pc" target="_blank"/>
              <SocialIcon url="https://www.instagram.com/myusiki.official/" target="_blank"/>
              <SocialIcon url="https://youtube.com/@Myusiki.Official?si=0ILz_9OKBvqnrk2C" target="_blank"/>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © Myusiki
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
