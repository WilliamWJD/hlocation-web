import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width:100vw;
  height:100vh;
`;

export const Content = styled.div`
  width:100%;
  max-width:1000px;
  margin: 0 auto;
  margin-top:100px;
`;

export const Search = styled.div`
  width:100%;
  height:45px;
  display:flex;
  flex-direction:row;

  >div{
    flex:1;
    height:45px;
    background-color:#fff;
    border-radius:10px;
    padding:5px 20px;

    display:flex;
    flex-direction:row;
    align-items:center;
  }
`;

export const InputSearch = styled.input`
  height:100%;
  flex:1;
  margin-left:10px;
  border:none;
`;

export const ButtonSearch = styled.button`
  border:none;
  width:110px;
  height:45px;
  background-color:#27AE60;
  color:#fff;
  font-weight:bold;
  border-radius:10px;
  font-size:16px;
  margin-left:10px;

  display:flex;
  align-items:center;
  justify-content:center;
  transition:background-color 0.2s;

  svg{
    margin-right:5px;
  }

  &:hover{
    background-color:${shade(0.2, '#27AE60')}
  }
`;
