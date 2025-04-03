import * as USER from '../pages/Portfolio/index';

export const nav = [
  {
    path: '/home',
    name: 'Home',
    component: <USER.Home />,
    accountType: 'user',
  },
  {
    path: '/about',
    name: 'About Me',
    component: <USER.About />,
    accountType: 'user',
  },
  {
    path: '/skills',
    name: 'Skills',
    component: <USER.Skills />,
    accountType: 'user',
  },
  {
    path: '/projects',
    name: 'Projects',
    component: <USER.Projects />,
    accountType: 'user',
  },
  {
    path: '/contact',
    name: 'Contact',
    component: <USER.Contact />,
    accountType: 'user',
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: <USER.Resume />,
    accountType: 'user',
  },
  {
    path: '/blog',
    name: 'Blog',
    component: <USER.Blog />,
    accountType: 'user',
  },
];
