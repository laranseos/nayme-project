
import mylogo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fix flex h-[80px] bg-[#426E86] text-white md:px-32 px-4">
      <div className='flex my-auto'>
        <img src={mylogo} alt="nayme" className="w-38" />
        <h1 className='my-auto font-poppins font-medium text-sm'>Company <br/>name</h1>
      </div>
      <div className='sm:flex hidden justify-between my-auto ml-auto mr-4 space-x-8'>
        <Link to={'/'}>
           <div>Home</div>
        </Link>
        <div>About Us</div>
        <Link to={'/pricing'}>
          <div>Pricing</div>
        </Link>
      </div>
      <div className='sm:flex hidden my-auto space-x-4 ml-4'>
        <Link to={'/login'}>
          <div className='py-1 px-8 rounded-md border border-white'>Login</div>
        </Link>
        <Link to={'/signup'}>
          <div className='py-1 px-8 rounded-md bg-white text-[#426E86]'>Sign up</div>
        </Link>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#426E86] absolute top-16 -right-4 mx-4 my-2 min-w-[140px] sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-4">
            <Link to={'/'}>        
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              >
                Home 
              </li>
            </Link>
            <li
              className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
            >
              About Us 
            </li>
            <Link to={'/pricing'}>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              >
                Pricing 
              </li>
            </Link>
            <hr className='border border-white w-full'></hr>
            <Link to={'/login'}>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              >
                Login 
              </li>
            </Link>
            <Link to={'/signup'}>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              >
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
