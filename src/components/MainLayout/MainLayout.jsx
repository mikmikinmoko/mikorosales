import Navigations from '../../pages/Portfolio/Navigations/Navigations';
import Content from '../Conten.jsx/Content';

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children, id }) => {
  // eslint-disable-next-line no-undef
  console.log(id);
  return (
    <div className="h-full w-full px-16 font-['Poppins'] font-normal">
      <div>
        <Navigations id={id} />
      </div>
      <Content className="h-4/5 w-full">
        <div>{children}</div>
      </Content>
    </div>
  );
};

export default MainLayout;
