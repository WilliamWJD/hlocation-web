import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface FormProps{
  name:string
}

const SignOut: React.FC = () => {
  const handleSubmit = useCallback((data:FormProps) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <Content>
        <h1>Dados cadastrais</h1>

        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Digite o seu nome"
          />

          <Input
            name="email"
            placeholder="Digite se e-mail favorito"
          />

          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha secreta"
          />

          <Input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirmar senha"
          />

          <Button title="Salvar" />
        </Form>

        <Link to="/">Cancelar</Link>
      </Content>
    </Container>
  );
};

export default SignOut;
