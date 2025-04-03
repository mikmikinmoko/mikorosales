import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioRoutes from './pagerRoutes/PortfolioRoutes';

const RootRoutes = () => {
  const router = createBrowserRouter([
    { path: '/*', Component: PortfolioRoutes },
    // { path: "/superadmin/*", Component: SuperAdminRotues },
  ]);
  return <RouterProvider router={router} />;
};

export default RootRoutes;
