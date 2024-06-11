import React from 'react';

function CSEvents() {


  return (
    <div className=''>
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10">
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
              Upcoming events
            </h3>
          </div>
        </div>
      </section>
      <section className='py-6 dark:bg-gray-500'>
      <div className="container flex flex-wrap items-center justify-center p-4 mx-auto sm:p-10">
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
              Past events
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CSEvents;
