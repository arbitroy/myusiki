import React from 'react';
import "./style.css";
function CSEvents() {
  return (
    <div className=''>
      <section className="pt-20 bg-blue-300">
        <div className='container flex flex-wrap items-center justify-center mx-auto sm:p-10'>
          <div className="container flex flex-wrap items-center justify-center sm:p-10">
            <div className="w-full lg:w-1/2 p-4">
              <h3 className="text-xl font-bold text-center tracking-tight text-gray-800 sm:text-6xl">
                Events
              </h3>
              <h6 className='font-bold text-center tracking-tight text-gray-800 sm:text-xl pt-3'>
                Don't miss out on an event get your tickets today!<br /> No upcoming event? Look at our past events!
              </h6>
            </div>
          </div>
          <div className="relative text-gray-600">
            <input type="search" name="search" placeholder="Search for events" className="bg-white h-10 px-5 rounded-full text-sm focus:outline-none w-80" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
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
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
          <div className="md:flex ">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
              <p className="mt-2 text-gray-500">Event Details...</p>
            </div>
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
