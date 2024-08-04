"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Achievements', path: '#achievements' },
{ title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-slate-400 top-0 left-0 right-0 z-10 bg-slate-300 bg-opacity-80'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href="/" className='text-3xl md:text-5xl text-black font-semibold'>LOGO</Link>

        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='flex items-center px-3 py-2 border rounded border-blue-800 text-blue-800 hover:text-white hover:border-white'
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className={`menu ${navbarOpen ? 'hidden' : 'block'} md:block md:w-auto`} id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}

export default Navbar;
