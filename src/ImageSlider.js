'use client';
import React, { useState, useEffect } from 'react';

export default function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-slider relative">
  <div className="relative">
    <img src={images[currentImageIndex]} alt="" className="w-full" />
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black text-white p-4 flex justify-center items-center">
      <p className="text-lg font-bold text-center">
        {getContentForIndex(currentImageIndex)}
      </p>
    </div>
  </div>
</div>

  );
}

function getContentForIndex(index) {
  const contentMap = {
    0: (
      <div>
        <p className="font-bold text-4xl">
          Day 1 - #singlikesol (challenge, shorts, etc.)
        </p>
        <p className="pt-4 text-xl">
          This day is characterized by covers of any of the Sauti Sol hits. At
          least five from Myusiki with an interesting twist to them. At least
          three group and two solos but as many as possible.
        </p>
      </div>
    ),
    1: (
      <div>
        <p className="font-bold text-4xl">Day 2 - #rewritesol</p>
        <p className="pt-4 text-xl">
          This day will be characterized by remixed versions of Sauti Sol songs.
          At least five from Myusiki with an interesting twist to them. At least
          three group and two solos but as many as possible.
        </p>
      </div>
    ),
    2: (
      <div>
        <p className="font-bold text-4xl">Day 3 - #shikanishasol</p>
        <p className="pt-4 text-xl">
          This day will involve the writing of mashups using the various Sauti
          Sol songs. At least five from Myusiki with an interesting twist to
          them. At least three group and two solos but as many as possible.
        </p>
      </div>
    ),
    3: (
      <div>
        <p className="font-bold text-4xl">Day 4 - #tuimbesol</p>
        <p className="pt-4 text-xl">
          This will be characterized by acapella song versions of Sauti Sol. At
          least five from Myusiki with an interesting twist to them. At least
          three group and two solos but as many as possible.
        </p>
      </div>
    ),
    4: (
      <div>
        <p className="font-bold text-4xl">Day 5 - #bonganasol</p>
        <p className="pt-4 text-xl">
          This day will be characterized by people giving their testimonies of
          what Sauti Sol has done for them and the impact Sauti Sol has had in
          their lives.
        </p>
      </div>
    ),
    5: (
      <div>
        <p className="font-bold text-4xl">Day 6 - #myfavouritesol</p>
        <p className="pt-4 text-xl">
          This will be characterized by people singing their favorite Sauti Sol
          fam and saying why they like it and why it is their favorite.
        </p>
      </div>
    ),
    6: (
      <div>
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
