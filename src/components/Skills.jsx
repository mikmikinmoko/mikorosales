import Pagenav from './Pagenav';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import reactjs from '../assets/react.png';
import node from '../assets/node.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactjs,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      src: node,
      title: 'NodeJs',
      style: 'shadow-green-400',
    },
  ];

  return (
    <div className="h-screen w-full bg-[#0a192f]">
      <Pagenav />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Skills
          </p>
          <p className="py-6">
            These are the technologies {"I've"} worked with
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`round-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
              >
                <img src={src} alt={title} className="mx-auto w-40" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
