import styled from 'styled-components';

const TableContainer = styled.table`
  width:100%;
  margin-top:33px;
  border-collapse: separate;
  border-spacing: 0 5px;

  thead th{
    background-color: #fff;
    height:45px;
    text-align: left;
    padding: 6px 15px 0;
    font-size:16px;
    color:#34495E;
  }

  tbody td{
    background-color: #fff;
    height:45px;
    text-align: left;
    padding: 6px 15px 0;
    color:#34495E;
  }

  td svg{
    cursor:pointer;
    margin-right:4px;

    &:last-child{
      margin-right:0;
    }
  }
`;

export default TableContainer;
