import styled from 'styled-components';
import { shade } from 'polished';

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
  width:422px;
  height:354px;
  background-color:#fff;
  margin-top:58px;
  border-radius:10px;
  padding:40px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  a{
    margin-top: 20px;
    color:#7F8C8D;
    transition: background 0.2s;

    &:hover{
      color:${shade(0.2, '#7F8C8D')}
    }
  }

  form{
    width:100%;
  }
`;
