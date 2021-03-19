import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:80px;
  background-color:#ECF0F1;
`;

export const Content = styled.div`
  width:100%;
  max-width:1180px;
  margin:0 auto;
  height:80px;

  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

  img{
    width:60px;
  }

  ul{
    display:flex;
    flex-direction:row;

    li{
      margin-left:30px;
      cursor:pointer;
      font-weight:700;
      color: #34495E;
      transition: color 0.2s;

      &:hover{
        color:${shade(-0.4, '#34495E')};
      }
    }
  }
`;

export const Profile = styled.div`
  cursor:pointer;

  img{
    width:65px;
    height:65px;
    border-radius:50%;
    border:1px solid #30336B;
  }
`;
