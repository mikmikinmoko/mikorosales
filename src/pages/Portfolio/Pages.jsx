import { useLocation } from 'react-router-dom';
import MainLayout from '../../components/MainLayout/MainLayout';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

// THIS COMPONENT IS FOR NON SPA

const Pages = () => {
  const ids = [
    {
      key: 0,
      id: '#home',
      label: 'Home',
    },
    {
      key: 1,
      id: '#about',
      label: 'Aboout Me',
    },
    {
      key: 2,
      id: '#skills',
      label: 'Skills',
    },
    {
      key: 3,
      id: '#projects',
      label: 'Projects',
    },
    {
      key: 4,
      id: '#contact',
      label: 'Contact',
    },
    {
      key: 5,
      id: '#footer',
      label: 'Footer',
    },
  ];

  return (
    <MainLayout id={ids}>
      <Home id={ids[0]} />
      <About id={ids[1]} />
      <Skills id={ids[2]} />
      <Projects id={ids[3]} />
      <Contact id={ids[4]} />
      <Footer id={ids[5]} />
    </MainLayout>
  );
};

export default Pages;
