import React from 'react';


function CSEvents() {


  return (
    <div className=''>

      <section className="py-6 bg-blue-300">
        <div className='container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10'>
          <div className="container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10">
            <div className="w-full lg:w-1/2 p-4">
              <h3 className="text-xl font-bold text-center tracking-tight text-gray-800 sm:text-6xl">
                Events
              </h3>
              <h6 className='font-bold text-center tracking-tight text-gray-800 sm:text-xl'>
                Don't miss out on an event get your tickets today!<br /> No upcoming event? Look at our past events!
              </h6>
            </div>
          </div>
          <div class="relative text-gray-600">
            <input type="search" name="serch" placeholder="Search for events" className="bg-white h-10 px-5 pr-80 rounded-full text-sm focus:outline-none" />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <img
                width={20}
                height={20}
                src="/search.svg"
                alt="Search button"
                sizes=''
              />
            </button>
          </div>
        </div>
      </section>
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10">
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
              Upcoming events
            </h3>
          </div>
        </div>
      </section>
      <section className='py-6 dark:bg-gray-500'>
        <div className="container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10">
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
              Past events
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CSEvents;
