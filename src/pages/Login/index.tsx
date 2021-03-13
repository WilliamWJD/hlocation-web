import React from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import imageBackLogin from '../../assets/backLogin.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormProps{
  email:string;
  password:string;
}

const Login: React.FC = () => {
  function handleSubmit(data: FormProps):void {
    console.log(data);
  }

  return (
    <Container>
      <img src={imageBackLogin} alt="logo" />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="Digite o seu e-mail favorito"
            Icon={MdMail}
          />

          <Input
            name="password"
            placeholder="Sua senha secreta"
            Icon={MdLock}
            type="password"
          />

          <Button />
        </Form>

        <Link to="/sign-out">Cadastre-se</Link>
      </Content>
    </Container>
  );
};

export default Login;
