import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import image1 from './assets/7/adedotun-adegborioye-pVSjlshmGs8-unsplash.jpg';
import image2 from './assets/7/alekon-pictures-gqX0rPCmdiU-unsplash.jpg';
import image3 from './assets/7/austin-neill-_uzJEiPETvY-unsplash.jpg';
import image4 from './assets/7/harry-swales-bfN0oW5d9-M-unsplash.jpg';
import image5 from './assets/7/richie-lugo-uSC6z5ajEVM-unsplash.jpg';
import image6 from './assets/7/vidar-nordli-mathisen-QsDArmUhlAE-unsplash.jpg';
import image7 from './assets/7/black-boy-posing-with-headphones.jpg';

const cardList = [
  {
    img: image1,
    name: "Growth",
    description: "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
    venue: "Ridgewood Hotel",
    price: {
      single: 350,
      couple: 650,
      gate: 500,
    },
    contact: "0775902389",
    time: "7pm till late",
  },
  {
    img: image2,
    name: "Auditions",
    description: "Display your talent",
    venue: "Ridgewood Hotel",
    price: {
      single: 350,
      couple: 650,
      gate: 500,
    },
    contact: "0775902389",
    time: "7pm till late",
  },
];

function CSEvents() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className=''>
      <ImageSlider images={images} />
      <div className="flex flex-wrap my-8">
        {cardList.map((card, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8`}
          >
            <div
              className={`relative overflow-hidden rounded-md border bg-white border-gray-300 transition duration-300 ${
                hoveredCard === index ? 'shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className={`p-4 ${hoveredCard === index ? 'h-auto' : 'h-24'}`}>
                <div
                  className={`hover:bg-gray-100 ${
                    hoveredCard === index ? 'bg-gray-100' : ''
                  }`}
                >
                  <h3 className="text-xl text-red-500 font-semibold">{card.name}</h3>
                  <p className={`mt-2 text-gray-700`}>
                    {card.description}
                  </p>
                </div>
                {hoveredCard === index && (
                  <div>
                    <p>Venue: {card.venue}</p>
                    <p>Price:</p>
                    <ul>
                      <li>Single: {card.price.single}</li>
                      <li>Couple: {card.price.couple}</li>
                      <li>Gate: {card.price.gate}</li>
                    </ul>
                    <p>Contact: {card.contact}</p>
                    <p>Time: {card.time}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CSEvents;
