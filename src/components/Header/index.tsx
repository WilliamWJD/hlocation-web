import React, { useCallback, useState } from 'react';
import { MdPermIdentity, MdInput } from 'react-icons/md';

import { useAuth } from '../../hooks/AuthContext';

import imgLogo from '../../assets/logo.svg';

import {
  Container, Content, Profile, BoxOptionsProfile, Logoff,
} from './styles';

const Header: React.FC = () => {
  const [boxProfile, setBoxProfile] = useState(false);

  const { signOut, user } = useAuth();

  const handleShowBoxProfile = useCallback(() => {
    setBoxProfile(!boxProfile);
  }, [boxProfile]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

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
          <img src={user.avatar_url} alt="william" />

          <BoxOptionsProfile boxProfile={boxProfile}>
            <strong>
              {user.name}
            </strong>

            <span>
              {' '}
              <MdPermIdentity />
              {' '}
              Meu perfil
            </span>

            <Logoff onClick={handleSignOut}>
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
