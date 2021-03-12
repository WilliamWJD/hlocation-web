import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width:100%;
  height: 55px;
  background-color:#27AE60;
  border-radius:10px;
  border:none;
  color:#fff;
  font-size:18px;
  transition: background 0.2s;

  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
    background-color:${shade(0.2, '#27AE60')}
  }
`;
