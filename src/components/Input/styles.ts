import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:55px;
  border:1px solid #7F8C8D;
  border-radius:10px;
  padding:10px;
  margin-bottom:10px;

  display:flex;
  flex-direction:row;
  align-items:center;

  svg{
    margin-right:10px;
  }

  input{
    width:100%;
    height:100%;
    border:none;
  }
`;
