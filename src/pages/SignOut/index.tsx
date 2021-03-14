import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidateErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Container, Content } from './styles';

interface FormProps{
  name:string,
  email:string,
  passwod:string
}

const SignOut: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data:FormProps) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);
      toast.success('Usuário cadastrado com sucesso!');

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidateErrors(err);
        formRef.current?.setErrors(errors);
      }

      toast.error('Erro ao cadastrar usuário!');
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>Dados cadastrais</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Button title="Salvar" />
        </Form>

        <Link to="/">Cancelar</Link>
      </Content>
    </Container>
  );
};

export default SignOut;
