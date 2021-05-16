import React, { useCallback, useEffect, useState } from 'react';
import {
  MdSearch, MdVisibility, MdCreate, MdDelete, MdAdd,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import Header from '../../../components/Header';
import TableContainer from '../../../components/Table/TableContainer';
import Modal from '../../../components/Modal';

import {
  Container, Content, InputSearch, Search, ButtonSearch, ViewMore,
} from './styles';

interface ITenants {
  id: string,
  name: string,
  rg: string,
  cpf: string,
  profession: string,
  marital_status: string,
  phone1: string,
}

const ListTenant: React.FC = () => {
  const [tenants, setTenants] = useState<ITenants[]>();
  const [showModal, setShowModal] = useState(false);
  const [tenantSelected, setTenantSelected] = useState<ITenants>();

  const handleOpenModalDelete = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSelectedTenantAndOpenModalDelete = useCallback((tenant) => {
    setTenantSelected(tenant);
    handleOpenModalDelete();
  }, [handleOpenModalDelete]);

  const handleDelete = useCallback(async () => {
    await api.delete(`/tenants/${tenantSelected?.id}`);
    toast.success('Inquilino excluído com sucesso..');
    handleOpenModalDelete();

    const tenantsFiltered = tenants?.filter((tenant) => tenant.id !== tenantSelected?.id);

    setTenants(tenantsFiltered);
  }, [tenantSelected?.id, handleOpenModalDelete, tenants]);

  useEffect(() => {
    async function loadTenants() {
      const response = await api.get('/tenants');
      setTenants(response.data);
    }
    loadTenants();
  }, []);

  return (
    <Container>
      <Modal
        title="inquilino"
        name={tenantSelected?.name || ''}
        showModal={showModal}
        handleOpenModal={handleOpenModalDelete}
        handleDelete={handleDelete}
      />

      <Header />

      <Content>
        <Search>
          <div>
            <MdSearch size={25} color="#7F8C8D" />
            <InputSearch placeholder="Busque pelo nome do inquilino" />
          </div>
          <Link to="/tenants-form">
            <ButtonSearch>
              <MdAdd size={22} />
              Novo
            </ButtonSearch>
          </Link>
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
                  <MdDelete size={20} color="#C0392B" onClick={() => handleSelectedTenantAndOpenModalDelete(tenant)} />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>

        <ViewMore>
          <div>
            {!tenants?.length ? (
              <p>😕 Ops, nenhum inquilino cadastrado.</p>
            ) : (
              <>
                <MdAdd size={25} />
                <strong>
                  Ver Mais
                </strong>
              </>
            )}
          </div>
        </ViewMore>
      </Content>
    </Container>
  );
};

export default ListTenant;
