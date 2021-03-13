import styled, { css } from 'styled-components';

interface ContainerProps{
  isFocused:boolean,
  isFilled:boolean
}

export const Container = styled.div<ContainerProps>`
  width:100%;
  height:55px;
  border:1px solid #7F8C8D;
  border-radius:10px;
  padding:10px;
  margin-bottom:10px;
  color:#7F8C8D;

  display:flex;
  flex-direction:row;
  align-items:center;

  svg{
    margin-right:10px;
  }

  ${(props) => props.isFocused && css`
    color: #30336B;
    border-color:#30336B;
  `}

  ${(props) => props.isFilled && css`
    color: #30336B;
  `}

  input{
    width:100%;
    height:100%;
    border:0;
    flex:1
  }
`;
