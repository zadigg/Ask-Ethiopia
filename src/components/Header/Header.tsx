import Sidebar from './Sidebar';
import Logo from './Logo';
import SearchForm from './SearchForm';
import SocialIcons from './SocialIcons';
import BurgerMenuButton from './BurgerMenuButton';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, toggleMenu }: HeaderProps) => (
  <div className='sticky top-0 z-50 bg-white'>
    <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    <nav className='mx-auto w-full border-b border-gray-200 py-3 md:w-[697px] lg:w-full'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center justify-between'>
          <Logo />
          <SearchForm />
          <div className='mb-3 flex w-full items-center justify-end md:order-3 md:mb-0 md:w-1/4'>
            <SocialIcons />
            <BurgerMenuButton toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
