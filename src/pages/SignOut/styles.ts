import { shade } from 'polished';
import styled from 'styled-components';

import backBody from '../../assets/backBody.svg';

export const Container = styled.div`
  width:100vw;
  height:100vh;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  background-image:url(${backBody});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size:350px;
`;

export const Content = styled.div`
  width:100%;
  max-width:540px;
  background-color:#fff;
  padding:40px 30px;
  border-radius:10px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  h1{
    color:#34495E;
    font-size:30;
    font-weight:700
  }

  form{
    width:100%;
    margin-top:50px;
  }

  a{
    margin-top:26px;
    color:#C0392B;
    transition: color 0.2s;

    &:hover{
      color:${shade(0.2, '#C0392B')}
    }
  }
`;
