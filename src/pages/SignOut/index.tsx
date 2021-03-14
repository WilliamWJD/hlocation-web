import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidateErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface FormProps{
  name:string
}

const SignOut: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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

      toast.success('Usuário cadastrado com sucesso!');
    } catch (err) {
      toast.error('Erro ao cadastrar usuário!');
      const errors = getValidateErrors(err);
      formRef.current?.setErrors(errors);
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
