import React from 'react';

const SearchForm = () => (
    <div className="w-full md:w-1/4 flex md:order-1">
        <form action="#" className="relative w-full">
            <span className="absolute left-4 top-3 text-gray-400">
                <i className="icon-search2"></i>
            </span>
            <input
                className="w-full pl-10 py-2 border rounded-full focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Search..." type="search"/>
        </form>
    </div>
);

export default SearchForm;
