import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Pagenav from './Pagenav';
import profile from '../assets/picture.jpg';

function Homepage() {
  return (
    <div className="h-screen w-full bg-[#0a192f] text-gray-200">
      <Pagenav />
      <div className="mx-auto flex h-[90%] max-w-screen-2xl flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col justify-center py-9">
          <h2 className="px-4 text-4xl font-bold sm:text-7xl">
            I am a Front-End Developer
          </h2>
          <p className="px-4 py-4 text-[1rem]">
            I have been studying front-end developer, as i learn more about web
            development i get excited the outcome that i will earn.
          </p>
          <div>
            <button className="mx-5 flex flex-row items-center justify-center rounded-lg bg-sky-600 px-4 py-2">
              Portfolio <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="mx-auto w-2/3 rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
