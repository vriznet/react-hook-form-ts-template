import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainerSC = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  padding: 12px 24px;
  width: 480px;
  font-size: 14px;
`;

const NavbarLinkListSC = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 24px;
`;

const Navbar = () => {
  return (
    <NavbarContainerSC>
      <NavbarLinkListSC>
        <li>
          <Link to="/text">text</Link>
        </li>
        <li>
          <Link to="/textarea">textarea</Link>
        </li>
        <li>
          <Link to="/select">select</Link>
        </li>
        <li>
          <Link to="/checkbox">checkbox</Link>
        </li>
        <li>
          <Link to="/radio">radio</Link>
        </li>
        <li>
          <Link to="/range">range</Link>
        </li>
      </NavbarLinkListSC>
    </NavbarContainerSC>
  );
};

export default Navbar;
