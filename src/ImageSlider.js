'use client';
import React, { useState, useEffect } from 'react';

export default function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to get content for the current index
  function getContentForIndex(index) {
    const contentMap = {
      0: (
        <div className="text-center">
          <p className="font-bold text-3xl">
            Day 1 - #singlikesol (challenge, shorts, etc.)
          </p>
          <p className="pt-4 text-lg">
            This day is characterized by covers of any of the Sauti Sol hits. At
            least five from Myusiki with an interesting twist to them. At least
            three group and two solos but as many as possible.
          </p>
        </div>
      ),
      1: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 2 - #rewritesol</p>
          <p className="pt-4 text-xl">
            This day will be characterized by remixed versions of Sauti Sol songs.
            At least five from Myusiki with an interesting twist to them. At least
            three group and two solos but as many as possible.
          </p>
        </div>
      ),
      2: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 3 - #shikanishasol</p>
          <p className="pt-4 text-xl">
            This day will involve the writing of mashups using the various Sauti
            Sol songs. At least five from Myusiki with an interesting twist to
            them. At least three group and two solos but as many as possible.
          </p>
        </div>
      ),
      3: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 4 - #tuimbesol</p>
          <p className="pt-4 text-xl">
            This will be characterized by acapella song versions of Sauti Sol. At
            least five from Myusiki with an interesting twist to them. At least
            three group and two solos but as many as possible.
          </p>
        </div>
      ),
      4: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 5 - #bonganasol</p>
          <p className="pt-4 text-xl">
            This day will be characterized by people giving their testimonies of
            what Sauti Sol has done for them and the impact Sauti Sol has had in
            their lives.
          </p>
        </div>
      ),
      5: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 6 - #myfavouritesol</p>
          <p className="pt-4 text-xl">
            This will be characterized by people singing their favorite Sauti Sol
            fam and saying why they like it and why it is their favorite.
          </p>
        </div>
      ),
      6: (
        <div className="text-center">
          <p className="font-bold text-4xl">Day 7 - #asantesolfest</p>
          <p className="pt-4 text-xl">
            This day is to just thank Sauti Sol for the great work they have done
            and sing their songs together. It is also where we will launch the
            Asante Sol album.
          </p>
        </div>
      ),
    };

    return contentMap[index] || <div></div>;
  }

  // Function to navigate to the next image
  function nextImage() {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  // Function to navigate to the previous image
  function prevImage() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  return (
    <div className="pt-8 pb-60 w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 font-montserrat relative">
      <div className="w-96 h-96 relative perspective-3d transform-style-preserve-3d">
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-5xl z-20 cursor-pointer select-none bg-transparent border-none"
          onClick={prevImage}
        >
          &lt;
        </button>
        {images.map((image, index) => (
          <div
            className="absolute w-full h-full transition-transform duration-300"
            style={{
              transform: `
                rotateY(${(currentImageIndex - index) * 50}deg)
                scaleY(${1 + Math.abs(currentImageIndex - index) * -0.4})
                translateZ(${Math.abs(currentImageIndex - index) * -30}rem)
                translateX(${(currentImageIndex - index) * -5}rem)
              `,
              filter: `blur(${Math.abs(currentImageIndex - index)}rem)`,
              opacity: Math.abs(currentImageIndex - index) >= 3 ? 0 : 1,
              display: Math.abs(currentImageIndex - index) > 3 ? 'none' : 'block',
            }}
            key={index}
          >
            <img
              src={image}
              alt={`day ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {getContentForIndex(index)}
          </div>
        ))}
        <button
          className="absolute top-36 right-3 transform translate-y-1/2 text-white text-5xl z-20 cursor-pointer select-none bg-transparent border-none"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
