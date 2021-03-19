import { shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

interface BoxProfileProps{
  boxProfile:boolean
}

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
  position:relative;

  img{
    width:65px;
    height:65px;
    border-radius:50%;
    border:1px solid #30336B;
  }
`;

const appearFromTop = keyframes`
  from{
    opacity:0;
    transform: translateX(-100px);
  }
  to{
    opacity:1;
    tranform:translateX(0)
  }
`;

export const BoxOptionsProfile = styled.div<BoxProfileProps>`
  width:150px;
  height:100px;
  background-color:#fff;
  position:absolute;
  left:0%;
  transform:translateX(-50%);
  border-radius:10px;
  padding:10px;

  display:${(props) => (props.boxProfile ? css`flex` : css`none`)};

  flex-direction:column;
  align-items:center;

  animation:${appearFromTop} 600ms;

  strong{
    margin-bottom:5px;
    color: #34495E;
  }

  span{
    display:flex;
    flex-direction:row;
    font-size:14px;
    color:#7f8c8d;

    > svg{
      margin-right:5px;
    }
  }
`;

export const Logoff = styled.span`
  margin-top:auto;
  color:#34495E !important;
  font-size:16px !important;
  transition: color 0.2s;

  &:hover{
    color:${shade(0.2, '#34495E')} !important;
  }
`;
