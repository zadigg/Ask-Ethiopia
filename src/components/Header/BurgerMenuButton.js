import React from 'react';
import {FaHamburger} from "react-icons/fa";

const BurgerMenuButton = ({toggleMenu}) => (
    <button
        className="flex flex-col items-center justify-center w-8 h-8 bg-transparent border-none focus:outline-none site-menu-toggle js-menu-toggle"
        onClick={toggleMenu}
    >
        <FaHamburger/>
    </button>
);

export default BurgerMenuButton;
