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
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
            <div className="md:pr-12">
              <small className="text-orange-500">About our gym</small>
              <h3 className="text-4xl uppercase font-bold">Safe Body Building</h3>
              <p className="mt-4 text-lg leading-relaxed">
                The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-dumbbell fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">
                        The latest & greatest gym equipment
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-hard-hat fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">
                        5-inch, quality foam floor padding
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-users fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">3 professional trainers</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;