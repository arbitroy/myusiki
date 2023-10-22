import React from 'react';

function TrainersSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">
              Meet Our Trainers
            </h2>
            <p className="text-lg leading-relaxed m-4">
              Our trainers are here to dedicate the time and effort that you need to get in the best shape of your life.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* Card 1 */}
          <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
            <div className="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="shadow-lg rounded max-w-full mx-auto"
                style={{ maxWidth: '250px' }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Mr Rogers</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Neighborhood Watchman
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
            <div className="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="shadow-lg rounded max-w-full mx-auto"
                style={{ maxWidth: '250px' }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Strawberry Shortcake</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Cupcake Smasher
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
            <div className="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="shadow-lg rounded max-w-full mx-auto"
                style={{ maxWidth: '250px' }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ronald McDonald</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Double Whoopass With Cheese
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainersSection;
