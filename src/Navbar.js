import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/myusiki.png';

function Navbar() {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-lg text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase "
          >
            <img className="leading-relaxed inline-block mr-2" width={50} src={logo} alt="Myusiki Logo" />
            Myusiki
          </Link>
        </div>
        <div className={'lg:flex flex-grow items-center'}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="flex items-center">
          <Link to="/" className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                <span className="inline-block ml-2">Home</span>
              </Link>
              <Link to="/events" className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                <span className="inline-block ml-2">Events</span>
              </Link>
              <Link to="/about" className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                <span className="inline-block ml-2">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
