import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, NavWrapper } from './styles';

const Header: React.FC = () => (
  <HeaderWrapper>
    <NavWrapper>
      <Link to="/dogs">Familia Pet</Link>
      <Link to="/adoptions">Adoção</Link>
      <Link to="/checkout" className="align-end">
        Seu novo amigo
      </Link>
    </NavWrapper>
  </HeaderWrapper>
);

export default Header;
