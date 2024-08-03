"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-slate-300 bg-opacity-90'>
            <div className=' flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-3xl md:text-5xl text-black font-semibold'>LOGO</Link>

                <div className='mobile-menu block md:hidden'>
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-blue-800 text-blue-800 hover:text-white hover:border-white'>
                        {navbarOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>

                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-slate-300 bg-opacity-90'>
            <div className=' flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-3xl md:text-5xl text-black font-semibold'>LOGO</Link>

                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-blue-800 text-blue-800 hover:text-white hover:border-white'>
                                <Bars3Icon className="h-5 w-5"></Bars3Icon>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-blue-800 text-blue-800 hover:text-white hover:border-white'>
                                <XMarkIcon className="h-5 w-5"></XMarkIcon>
                            </button>)
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    )
}

export default Navbar


    < section className = "text-black" >
        <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 ">
            <Image
                src={"/images/tech2.jpg"}
                width={300}
                height={300}
                alt="tech"
                className=""
            />
            <div>
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                    libero in mauris tristique efficitur. Sed vel felis vel libero
                    viverra vulputate. Nulla facilisi. Sed quis condimentum neque, vel
                    lobortis lectus. Donec vel dui vel ipsum placerat consectetur. Nulla
                    facilisi.
                </p>
            </div>
        </div>
    </ >


    {
        TAB_DATA.map((tabData) => (
            <div key={tabData.id}>
                {tab === tabData.id && (
                    <div>
                        <h3 className="text-2xl font-bold">{tabData.title}</h3>
                        <div className="mt-4">{tabData.content}</div>
                    </div>
                )}