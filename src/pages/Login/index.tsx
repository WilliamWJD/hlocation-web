import React, { useCallback, useRef } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

import imageBackLogin from '../../assets/backLogin.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormProps{
  email:string;
  password:string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await (schema.validate(data, {
        abortEarly: false,
      }));
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <img src={imageBackLogin} alt="logo" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
