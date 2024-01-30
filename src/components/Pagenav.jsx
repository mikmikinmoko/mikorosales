import { FaBars } from 'react-icons/fa6';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaFacebook, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

function Pagenav() {
  const [nav, setNav] = useState(false);

  const handleClickNav = () => setNav(!nav);

  return (
    // menu
    <div className="font flex h-[80px] w-full items-center justify-between bg-[#0a192f] bg-[]  px-4 text-gray-300">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul className="hidden items-center justify-center text-[1.3rem] md:flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
      {/* hamburger menu */}
      <div
        onClick={handleClickNav}
        className="z-10 cursor-pointer text-[1.5rem] md:hidden"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center  bg-[#0a192f]  md:hidden'
        }
      >
        <li className="py-6 text-3xl font-light text-gray-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="py-6 text-3xl font-light text-gray-200">
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li className="py-6 text-3xl font-light text-gray-200">
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
      {/* icons */}
      <div className="fixed left-0 top-[35%] hidden flex-col md:flex">
        <ul className="flex flex-col">
          <li className="ml-[-100px] flex h-[40px] w-[160px] items-center justify-between rounded-md border bg-blue-500 duration-300 hover:ml-[-10px]">
            <NavLink
              to="https://www.facebook.com/mikorosales"
              target="_blank"
              className="flex w-full items-center justify-between text-gray-300"
            >
              Facebook
              <FaFacebook size={30} />
            </NavLink>
          </li>
          <li className="ml-[-100px] flex h-[40px] w-[160px] items-center justify-between rounded-md bg-[#fbad50] duration-300 hover:ml-[-10px]">
            <NavLink
              to="https://www.instagram.com/mikmikinmoko/"
              target="_blank"
              className="flex w-full items-center justify-between text-gray-300"
            >
              Instagram
              <FaInstagramSquare size={30} />
            </NavLink>
          </li>
          <li className="ml-[-100px] flex h-[40px] w-[160px] items-center justify-between rounded-md bg-[#333333] duration-300 hover:ml-[-10px]">
            <NavLink
              to="https://github.com/mikmikinmoko"
              target="_blank"
              className="flex w-full items-center justify-between text-gray-300"
            >
              Github
              <FaGithubSquare size={30} />
            </NavLink>
          </li>
          <li className="ml-[-100px] flex h-[40px] w-[160px] items-center justify-between rounded-md bg-[#6fc2b0] duration-300 hover:ml-[-10px]">
            <NavLink
              to="https://myaccount.google.com/?utm_source=OGB&utm_medium=app"
              target="_blank"
              className="flex w-full items-center justify-between text-gray-300"
            >
              Email
              <MdAlternateEmail size={30} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagenav;
