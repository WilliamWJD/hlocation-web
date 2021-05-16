import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

const TenantForm: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handledSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido'),
        rg: Yup.string().required('RG é obrigatório'),
        cpf: Yup.string().required('CPF é obrigatório'),
        profession: Yup.string().required('Profissão é obrigatório'),
        phone1: Yup.string().required('Telefone é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      await api.post('/tenants', data);

      toast.success('Inquilino cadastrado com sucesso!');
      history.push('/tenants');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      toast.error('Erro ao cadastrar inquilino');
    }
  }, [history]);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Cadastro de inquilinos</h1>
        <span>Dados cadastrais</span>

        <Form onSubmit={handledSubmit} ref={formRef}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Digite o e-mail" />
          <div>
            <Input name="rg" placeholder="RG" />
            <Input name="cpf" placeholder="CPF" />
          </div>
          <div>
            <Input name="marital_status" placeholder="Estado civil" />
            <Input name="genre" placeholder="Gênero" />
          </div>
          <Input name="profession" placeholder="Profissão" />

          <div>
            <Input name="phone1" placeholder="Telefone 1" />
            <Input name="phone2" placeholder="Telefone 2" />
          </div>

          <Button title="Salvar" />
        </Form>
      </Content>
    </Container>
  );
};

export default TenantForm;
