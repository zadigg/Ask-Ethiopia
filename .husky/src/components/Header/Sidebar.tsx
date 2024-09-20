import React from 'react';

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ isMenuOpen, toggleMenu }: SidebarProps) => (
  <div
    className={`fixed right-0 top-0 z-50 h-full w-3/4 max-w-xs transform bg-white ${
      isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } px-4 py-6 transition-transform duration-500 ease-in-out`}
  >
    <div className='mb-4 flex items-center justify-between'>
      <div className='cursor-pointer' onClick={toggleMenu}>
        <span className='text-xl'>&#x2715;</span>
      </div>
    </div>
    {/* Mobile Navigation Menu */}
    <div className='site-mobile-menu-body'>
      <ul className='space-y-4'>
        <li>
          <a
            className='block text-black hover:text-gray-700'
            href='index-2.html'
          >
            Home
          </a>
        </li>
        <li className='group relative'>
          <a
            className='block text-black hover:text-gray-700'
            href='categories.html'
          >
            Categories
          </a>
          <ul className='mt-1 hidden bg-white shadow-lg group-hover:block'>
            <li>
              <a
                className='block px-4 py-2 text-black hover:text-yellow-600'
                href='single.html'
              >
                Travel
              </a>
            </li>
            <li>
              <a
                className='block px-4 py-2 text-black hover:text-yellow-600'
                href='single.html'
              >
                Food
              </a>
            </li>
            <li>
              <a
                className='block px-4 py-2 text-black hover:text-yellow-600'
                href='single.html'
              >
                Technology
              </a>
            </li>
            <li>
              <a
                className='block px-4 py-2 text-black hover:text-yellow-600'
                href='single.html'
              >
                Business
              </a>
            </li>
            <li className='group relative'>
              <a
                className='block px-4 py-2 text-black hover:text-yellow-600'
                href='single.html'
              >
                Dropdown
              </a>
              <ul className='mt-1 hidden bg-white shadow-lg group-hover:block'>
                <li>
                  <a
                    className='block px-4 py-2 text-black hover:text-yellow-600'
                    href='single.html'
                  >
                    Sub Menu One
                  </a>
                </li>
                <li>
                  <a
                    className='block px-4 py-2 text-black hover:text-yellow-600'
                    href='single.html'
                  >
                    Sub Menu Two
                  </a>
                </li>
                <li>
                  <a
                    className='block px-4 py-2 text-black hover:text-yellow-600'
                    href='single.html'
                  >
                    Sub Menu Three
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a
            className='block text-black hover:text-gray-700'
            href='single.html'
          >
            Travel
          </a>
        </li>
        <li>
          <a
            className='block text-black hover:text-gray-700'
            href='single.html'
          >
            Food
          </a>
        </li>
        <li>
          <a
            className='block text-black hover:text-gray-700'
            href='single.html'
          >
            Technology
          </a>
        </li>
        <li>
          <a
            className='block text-black hover:text-gray-700'
            href='single.html'
          >
            Business
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
