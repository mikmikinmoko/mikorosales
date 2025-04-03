import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../components/MainLayout/MainLayout';
import { nav } from '../../helpers/nav';
import Home from '../../pages/Portfolio//Home/Home';

// helpers nav here

const PortfolioRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate to="/" />}> */}
      {/* in mainlayout props the nav there it will display the header navigation*/}
      <Route path="*" element={<MainLayout nav={nav} />} />
      <Route path={'/home'} element={<Home />} />
      {/* map here the nav */}
      {/* </Route> */}
    </Routes>
  );
};

export default PortfolioRoutes;
