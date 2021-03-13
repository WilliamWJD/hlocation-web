import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps{
  isFocused:boolean,
  isFilled:boolean,
  isErrored:boolean
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

  ${(props) => props.isErrored && css`
    border-color: #c0392b;
  `}

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

export const Error = styled(Tooltip)`
  svg{
    margin:0;
    margin-left:10px;
  }
`;
