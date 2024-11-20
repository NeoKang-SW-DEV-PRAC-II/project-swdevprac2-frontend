'use client'

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { UsersAPI } from '@/app/api/user';
import { useAuthAPI } from '@/app/api/auth/[...nextauth]/authapi';

import { LoadingProvider, useLoading } from '@/app/context/LoadingContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const { getGetServerSession } = useAuthAPI();
  const [session, setSession] = useState<any>(null);
  const { loading, setLoading, companyInfoLoading, setCompanyInfoLoading } = useLoading();

  const updateSession = useCallback(async () => {
    setLoading(true);
    const res = await getGetServerSession(authOptions);
    setSession(res);
    setLoading(false);  
  }, []);
  useEffect(() => {
    updateSession();
  }, []);

  return (
    (loading || companyInfoLoading) ?
    (<div>
      Loading...
    </div>) : 
    (
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
            <div className={`${isOpen ? "md:order-2" : "md:order-0"} flex`}>
              <button
                type="button"
                className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                onClick={toggleMenu}
                aria-controls="mobile-menu-3"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
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
                  className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
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
            <div className="hidden md:flex">
              <ul className="pr-3 flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li className='bg-none'>
                  <Link
                    href="/"
                    className="md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Review Us
                  </Link>
                </li>
                <li>

                  {
                    session ? <Link href="/api/auth/signout"><div className='bg-none hover:bg-blue-700 hover:text-white text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0'>Sign-Out of {session.user?.name}</div></Link>
                      : <Link href="/api/auth/signin"><div className='bg-none hover:bg-blue-700 hover:text-white text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0'>Sign-In</div></Link>
                  }
                </li>
              </ul>
            </div>
          </div>
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 0, opacity: 0 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div
                  className={`${isOpen ? 'block px-1' : 'hidden h-0'
                    } md:flex justify-between items-center w-full md:w-auto md:order-2`}
                  id="mobile-menu-3"
                >
                  <ul className="flex-col md:flex-row flex md:space-x-8 mt-1 md:mt-0 md:text-sm md:font-medium pb-2">
                    <li>
                      <Link
                        href="/"
                        className="bg-none hover:bg-blue-700 hover:text-white md:bg-transparent text-gray-700 block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="bg-none hover:bg-blue-700 hover:text-white text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                      >
                        Review Us
                      </Link>
                    </li>
                    <li>

                      {
                        session ? <Link href="/api/auth/signout"><div className='bg-none hover:bg-blue-700 hover:text-white text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0'>Sign-Out of {session.user?.name}</div></Link>
                          : <Link href="/api/auth/signin"><div className='bg-none hover:bg-blue-700 hover:text-white text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0'>Sign-In</div></Link>
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
    )
  );
};

export default Navbar;