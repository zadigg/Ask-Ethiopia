import { FaHamburger } from 'react-icons/fa';

interface BurgerMenuButtonProps {
  toggleMenu: () => void;
}

const BurgerMenuButton = ({ toggleMenu }: BurgerMenuButtonProps) => (
  <button
    className='site-menu-toggle js-menu-toggle flex h-8 w-8 flex-col items-center justify-center border-none bg-transparent focus:outline-none'
    onClick={toggleMenu}
  >
    <FaHamburger />
  </button>
);

export default BurgerMenuButton;
