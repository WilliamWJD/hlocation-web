import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
`;

export const Content = styled.div`
  width:100%;
  max-width:615px;
  background-color:#fff;
  margin: 0 auto;
  margin-top:114px;
  border-radius:10px;
  padding:30px;

  display:flex;
  flex-direction:column;

  h1{
    font-size:23px;
    color:#34495E;
  }

  span{
    margin-top:16px;
    color:#34495E;
  }

  form{
    margin-top:50px;

    >div{
      display:flex;
      flex-direction:row;
    }
  }
`;
