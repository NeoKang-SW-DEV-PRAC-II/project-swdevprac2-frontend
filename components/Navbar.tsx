'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import { useSession } from "next-auth/react";

export default function Navbar() {

  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <div className="mx-auto bg-[#edeef3]">
      <nav className="border-gray-200 mb-10 shadow-[0px_4px_4px_0px_#00000025]">
        <div>
          <div className="container mx-auto flex flex-wrap items-center justify-between min-w-full border-gray-200 shadow-[0px_4px_4px_0px_#00000025] px-2">
            <Link href="https://github.com/Aphrodicez/DessertsInDorm" className="flex">
              <img src='/GitHub-Logo.png' alt="GitHub Logo" className="w-10 h-14 py-2" />
              <span className="self-center text-lg font-semibold whitespace-nowrap pl-4">
                Life Long Learning
              </span>
            </Link>
            <div className={`${isNavbarOpen ? "md:order-2" : "md:order-0"} flex`}>
              <button
                type="button"
                className=" text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                onClick={toggleNavbar}
                aria-controls="mobile-menu-3"
                aria-expanded={isNavbarOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isNavbarOpen ? 'hidden' : 'block'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${isNavbarOpen ? 'block' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={isNavbarOpen ? { y: 0, opacity: 1 } : { y: 0, opacity: 0 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div
                  className={`${isNavbarOpen ? 'block px-1' : 'hidden h-0'
                    } justify-between items-center w-full`}
                  id="mobile-menu-3"
                >
                  <ul className="flex flex-col mt-1 pb-2">
                    <li>
                      <Link
                        href="/"
                        className="bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 rounded"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bookings/manage"
                        className="bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 rounded"
                      >
                        My Booking
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/companies"
                        className="bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 rounded"
                      >
                        Companies List
                      </Link>
                    </li>
                    <li>

                      {
                        session ? <Link href="/api/auth/signout"><div className='bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 rounded'>Sign-Out of {session.user?.name}</div></Link>
                          : <Link href="/api/auth/signin"><div className='bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 rounded'>Sign-In</div></Link>
                      }
                    </li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </div>
  );
};