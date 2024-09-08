import React from 'react';

const Sidebar = ({isMenuOpen, toggleMenu}) => (
    <div
        className={`fixed right-0 top-0 w-3/4 max-w-xs h-full z-50 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out px-4 py-6`}>
        <div className="flex justify-between items-center mb-4">
            <div className="cursor-pointer" onClick={toggleMenu}>
                <span className="text-xl">&#x2715;</span>
            </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div className="site-mobile-menu-body">
            <ul className="space-y-4">
                <li><a className="block text-black hover:text-gray-700" href="index-2.html">Home</a></li>
                <li className="relative group">
                    <a className="block text-black hover:text-gray-700" href="categories.html">Categories</a>
                    <ul className="mt-1 hidden group-hover:block bg-white shadow-lg">
                        <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Travel</a></li>
                        <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Food</a></li>
                        <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Technology</a></li>
                        <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Business</a></li>
                        <li className="relative group">
                            <a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Dropdown</a>
                            <ul className="mt-1 hidden group-hover:block bg-white shadow-lg">
                                <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Sub Menu
                                    One</a></li>
                                <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Sub Menu
                                    Two</a></li>
                                <li><a className="block px-4 py-2 text-black hover:text-yellow-600" href="#">Sub Menu
                                    Three</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a className="block text-black hover:text-gray-700" href="#">Travel</a></li>
                <li><a className="block text-black hover:text-gray-700" href="#">Food</a></li>
                <li><a className="block text-black hover:text-gray-700" href="#">Technology</a></li>
                <li><a className="block text-black hover:text-gray-700" href="#">Business</a></li>
            </ul>
        </div>
    </div>
);

export default Sidebar;
