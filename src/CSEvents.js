import React, { useState, useEffect } from 'react';

function CSEvents() {
  const [category, setCategory] = useState('');
  const [site, setSite] = useState('');
  const [search, setSearch] = useState('');
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Fetch data for events, categories, and sites here
    // Replace the following placeholders with actual data
    const dummyData = {
      events: [], // Array of event objects
      categories: [], // Array of category names
      sites: [], // Array of site names
    };
    setEvents(dummyData.events);
    setCategories(dummyData.categories);
    setSites(dummyData.sites);
  }, []);

  return (
    <div className="mx-auto mt-8 rounded bg-white pt-8 sm:pl-8 sm:pr-4 max-w-xl lg:max-w-4xl " >
      <div className="mb-8 flex flex-col sm:grid sm:grid-cols-2">
        <div>
          {/* Categories filter */}
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-4 mr-3 mb-3 bg-yellow-400 rounded-lg text-white font-bold">
            <option value="">Filter by Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Sites filter */}
          <select value={site} onChange={(e) => setSite(e.target.value)} className="p-4 mb-3 bg-yellow-400 rounded-lg text-white font-bold">
            <option value="">Filter by Site</option>
            {sites.map((site, index) => (
              <option key={index} value={site}>
                {site}
              </option>
            ))}
          </select>
        </div>
        {/* Search bar */}
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            type="search"
            className="p-4 mt-2 sm:mt-0 w-full bg-gray-200 rounded-lg"
          />
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap w-full">
        {events.map((event, index) => (
          <a key={index} href={event.link} target="_blank" className="mx-auto">
            <div className="flex sm:flex-col sm:h-80 rounded-2xl bg-red-500 mb-6 sm:transform transition duration-500 opacity-90 hover:opacity-100 hover:scale-105">
              {/* Event image as top half of card */}
              <div className="h-16 w-24 sm:h-40 sm:w-60 flex flex-shrink-0">
                <img className="mx-auto rounded-l-2xl sm:rounded-bl-none sm:rounded-tr-2xl object-cover" src={event.image} alt={event.name} />
              </div>
              {/* Bottom half of card */}
              <div className="flex flex-col justify-center sm:text-center sm:mt-3 ml-6 sm:ml-0 text-white">
                {/* Event name */}
                <div className="overflow-hidden h-6 sm:overflow-visible sm:h-full sm:w-52 sm:mx-auto">
                  <h3 className="text-base lg:text-lg font-bold text-yellow-300">{event.name}</h3>
                </div>
                {/* Text information section */}
                <div>
                  <div className="mt-2 max-h-5 sm:max-h-full overflow-hidden w-full">
                    <p className="text-sm inline sm:block">
                      <i className="fa fa-calendar-day"></i>&ensp;
                      <span dangerouslySetInnerHTML={{ __html: event.date }}></span>
                      <span className="sm:hidden">&emsp;</span>
                    </p>
                    <p className="text-sm inline sm:inline-block">
                      <i className="far fa-clock"></i>&ensp;
                      <span>{event.time}</span>
                      <span className="sm:hidden">&emsp;</span>
                    </p>
                    <p className="text-sm inline sm:block mt-1 italic">
                      <i className="fas fa-map-marker-alt"></i>&ensp;
                      <span>{event.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CSEvents;