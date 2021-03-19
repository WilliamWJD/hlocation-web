import React, { useCallback, useRef } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import imageBackLogin from '../../assets/backLogin.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormProps{
  email:string;
  password:string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line no-shadow
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await (schema.validate(data, {
        abortEarly: false,
      }));

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      toast.error('Erro ao fazer login, tente novamente');
    }
  }, [signIn]);

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

          <Button
            title="Entrar"
          />
        </Form>

        <Link to="/SignOut">Cadastre-se</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
