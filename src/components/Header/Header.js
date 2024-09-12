import {useState} from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';
import SocialIcons from './SocialIcons';
import BurgerMenuButton from './BurgerMenuButton';
import Sidebar from "./Sidebar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu */}
            <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>

            {/* Main Navigation */}
            <nav className="w-full border-b border-gray-200 py-5">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        {/* Logo */}
                        <Logo/>

                        {/* Search Form */}
                        <SearchForm/>

                        {/* Social Icons and Burger Menu */}
                        <div className="w-full md:w-1/4 flex justify-end items-center md:order-3 mb-3 md:mb-0">
                            <SocialIcons/>
                            <BurgerMenuButton toggleMenu={toggleMenu}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
