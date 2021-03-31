import React, { useEffect, useState } from 'react';
import {
  MdSearch, MdVisibility, MdCreate, MdDelete, MdAdd,
} from 'react-icons/md';
import Header from '../../../components/Header';
import TableContainer from '../../../components/Table/TableContainer';
import api from '../../../services/api';

import {
  Container, Content, InputSearch, Search, ButtonSearch, ViewMore,
} from './styles';

interface ITenants{
  id:string,
  name:string,
  rg:string,
  cpf:string,
  profession:string,
  marital_status:string,
  phone1:string,
}

const ListTenant: React.FC = () => {
  const [tenants, setTenants] = useState<ITenants[]>();

  useEffect(() => {
    async function loadTenants() {
      const response = await api.get('/tenants');
      setTenants(response.data);
    }
    loadTenants();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Search>
          <div>
            <MdSearch size={25} color="#7F8C8D" />
            <InputSearch placeholder="Busque pelo nome do inquilino" />
          </div>
          <ButtonSearch>
            <MdAdd size={22} />
            Novo
          </ButtonSearch>
        </Search>

        <TableContainer>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Profissão</th>
              <th>Estado civíl</th>
              <th>Fone</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {tenants?.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.rg}</td>
                <td>{tenant.cpf}</td>
                <td>{tenant.profession}</td>
                <td>{tenant.marital_status}</td>
                <td>{tenant.phone1}</td>
                <td>
                  <MdVisibility size={20} color="#2C3E50" />
                  <MdCreate size={20} color="#2980B9" />
                  <MdDelete size={20} color="#C0392B" />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>

        <ViewMore>
          <div>
            <MdAdd size={25} />
            <strong>
              Ver Mais
            </strong>
          </div>
        </ViewMore>
      </Content>
    </Container>
  );
};

export default ListTenant;
