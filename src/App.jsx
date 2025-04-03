import MainLayout from './components/MainLayout/MainLayout';

import Pages from './pages/Portfolio/Pages';
// import RootRoutes from './routes/routes';

function App() {
  const test = 'test';
  return (
    <>
      {/* <RootRoutes /> */}
      <Pages test={test} />
    </>
  );
}
export default App;
