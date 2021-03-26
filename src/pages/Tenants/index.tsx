import React from 'react';
import {
  MdSearch, MdVisibility, MdCreate, MdDelete, MdAdd,
} from 'react-icons/md';
import Header from '../../components/Header';
import TableContainer from '../../components/Table/TableContainer';

import {
  Container, Content, InputSearch, Search, ButtonSearch,
} from './styles';

const Tenants: React.FC = () => (
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
          <tr>
            <td>William José Dias</td>
            <td>44.055.454-55</td>
            <td>444.858.212.55</td>
            <td>Desenvolvedor FullStack</td>
            <td>Casado</td>
            <td>(19)98888-8888</td>
            <td>
              <MdVisibility size={20} color="#2C3E50" />
              <MdCreate size={20} color="#2980B9" />
              <MdDelete size={20} color="#C0392B" />
            </td>
          </tr>
          <tr>
            <td>William José Dias</td>
            <td>44.055.454-55</td>
            <td>444.858.212.55</td>
            <td>Desenvolvedor FullStack</td>
            <td>Casado</td>
            <td>(19)98888-8888</td>
            <td>
              <MdVisibility size={20} color="#2C3E50" />
              <MdCreate size={20} color="#2980B9" />
              <MdDelete size={20} color="#C0392B" />
            </td>
          </tr>
          <tr>
            <td>William José Dias</td>
            <td>44.055.454-55</td>
            <td>444.858.212.55</td>
            <td>Desenvolvedor FullStack</td>
            <td>Casado</td>
            <td>(19)98888-8888</td>
            <td>
              <MdVisibility size={20} color="#2C3E50" />
              <MdCreate size={20} color="#2980B9" />
              <MdDelete size={20} color="#C0392B" />
            </td>
          </tr>
          <tr>
            <td>William José Dias</td>
            <td>44.055.454-55</td>
            <td>444.858.212.55</td>
            <td>Desenvolvedor FullStack</td>
            <td>Casado</td>
            <td>(19)98888-8888</td>
            <td>
              <MdVisibility size={20} color="#2C3E50" />
              <MdCreate size={20} color="#2980B9" />
              <MdDelete size={20} color="#C0392B" />
            </td>
          </tr>
        </tbody>

      </TableContainer>
    </Content>
  </Container>
);

export default Tenants;
