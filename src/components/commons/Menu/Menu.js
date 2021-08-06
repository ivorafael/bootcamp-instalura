import React from 'react';

import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button/Button';
import Text from '../../foundation/Text/Text';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const mainNavItems = [ {
  children: 'Home',
  href: '/',
}, {
  children: 'Perguntas frequentes',
  href: '/faq',
}, {
  children: 'Sobre',
  href: '/about',
} ];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Menu = () => (
  <MenuWrapper>
    <MenuWrapper.Brand>
      <Logo />
    </MenuWrapper.Brand>

    <MenuWrapper.PrimaryNav as="ul">
      { mainNavItems.map( ( item ) => (
        <li key={ item.href }>
          <Text tag="a" variant="smallestException" { ...item } />
        </li>
      ) ) }
    </MenuWrapper.PrimaryNav>

    <MenuWrapper.AuxNav>
      <Button variant="secondary.main" ghost>Entrar</Button>
      <Button variant="primary.main">Cadastrar</Button>
    </MenuWrapper.AuxNav>
  </MenuWrapper>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Menu;
