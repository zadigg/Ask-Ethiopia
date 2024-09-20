import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const SocialIcons = () => (
  <ul className='mr-auto flex space-x-2'>
    <li>
      <a href='single.html'>
        <span className='icon-twitter text-black hover:text-gray-700'>
          <FaTwitter />
        </span>
      </a>
    </li>
    <li>
      <a href='single.html'>
        <span className='icon-facebook text-black hover:text-gray-700'>
          <FaFacebookF />
        </span>
      </a>
    </li>
    <li>
      <a href='single.html'>
        <span className='icon-instagram text-black hover:text-gray-700'>
          <FaInstagram />
        </span>
      </a>
    </li>
  </ul>
);

export default SocialIcons;
