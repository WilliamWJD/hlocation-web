import React from 'react';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={imgLogo} alt="hlocation" />

      <ul>
        <li>Home</li>
        <li>Inquilinos</li>
        <li>Imóveis</li>
        <li>Locações</li>
        <li>Recibos</li>
      </ul>

      <Profile>
        <img src="https://avatars.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4" alt="william" />
      </Profile>
    </Content>
  </Container>
);

export default Header;
