import React from 'react';
import { MdMail, MdLock } from 'react-icons/md';

import { Container, Content } from './styles';

import imageBackLogin from '../../assets/backLogin.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => (
  <Container>
    <img src={imageBackLogin} alt="logo" />
    <Content>
      <Input
        inputName="email"
        placeholderText="Digite o seu e-mail favorito"
        Icon={MdMail}
      />

      <Input
        inputName="password"
        placeholderText="Sua senha secreta"
        Icon={MdLock}
      />

      <Button />

      <a href="#/">Cadastre-se</a>
    </Content>
  </Container>
);

export default Login;
