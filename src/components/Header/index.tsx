import React, { useCallback, useState } from 'react';
import { MdPermIdentity, MdInput } from 'react-icons/md';

import imgLogo from '../../assets/logo.svg';

import {
  Container, Content, Profile, BoxOptionsProfile, Logoff,
} from './styles';

const Header: React.FC = () => {
  const [boxProfile, setBoxProfile] = useState(false);

  const handleShowBoxProfile = useCallback(() => {
    setBoxProfile(!boxProfile);
  }, [boxProfile]);

  return (
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

        <Profile onClick={handleShowBoxProfile}>
          <img src="https://avatars.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4" alt="william" />

          <BoxOptionsProfile boxProfile={boxProfile}>
            <strong>
              William Dias
            </strong>

            <span>
              {' '}
              <MdPermIdentity />
              {' '}
              Meu perfil
            </span>

            <Logoff>
              <MdInput />
              Sair
            </Logoff>
          </BoxOptionsProfile>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
