import Pagenav from './Pagenav';
import pizzamenu from '../assets/pizzamenu.png';
import eatsplit from '../assets/eatsplit.png';
import travelist from '../assets/travelist.png';
import reactquiz from '../assets/reactquiz.png';
import { NavLink } from 'react-router-dom';

const projects = [
  {
    id: 1,
    img: pizzamenu,
    title: 'Pizza Menu',
    src: 'https://pizzamenu-project.netlify.app/',
  },
  {
    id: 2,
    img: eatsplit,
    title: 'Eat n Split',
    src: 'https://eat-split-project.netlify.app/',
  },
  {
    id: 3,
    img: travelist,
    title: 'Travel List',
    src: 'https://travels-list-project.netlify.app',
  },
  {
    id: 4,
    img: reactquiz,
    title: 'The React Quiz',
    src: 'https://thereactquiz-project.netlify.app/',
  },
];

function Porjects() {
  return (
    <div className="h-screen w-full bg-[#0a192f]">
      <Pagenav />
      <div className=" mx-auto flex w-full max-w-screen-xl flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Projects
          </p>
          <p className="py-6 text-[1.3rem]">
            These are the projects that {"I've"} been working on.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-2 sm:px-0">
          {projects.map(({ id, src, title, img }) => {
            return (
              <div
                key={id}
                className="round-lg py-2 shadow-md duration-500 hover:scale-105"
              >
                <img src={img} alt={title} className="mx-auto" />
                <p className="mt-4">
                  <NavLink to={src} target="_blank">
                    {title}
                  </NavLink>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Porjects;
