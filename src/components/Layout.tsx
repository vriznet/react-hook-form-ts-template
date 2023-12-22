import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Navbar from './Navbar';
import styled from 'styled-components';

const ContainerSC = styled.div`
  width: 480px;
`;

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ContainerSC>
        <Outlet />
      </ContainerSC>
    </>
  );
};

export default Layout;
