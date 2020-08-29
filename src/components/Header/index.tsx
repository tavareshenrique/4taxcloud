import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '~/assets/img/logo-seidor.png';

import { Container, IconContent, MenuContent } from './styles';

const Header: React.FC = () => {
  return (
    <Container data-testid="header">
      <IconContent>
        <img src={Logo} alt="Logo da Seidor" />
      </IconContent>

      <MenuContent>
        <NavLink activeClassName="selected" to="/" exact>
          Tabelas e cálculos do IRFF
        </NavLink>
        <NavLink activeClassName="selected" to="/employee">
          Registrar Funcionário
        </NavLink>
      </MenuContent>
    </Container>
  );
};

export default Header;
