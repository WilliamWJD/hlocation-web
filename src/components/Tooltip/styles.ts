import styled from 'styled-components';

export const Container = styled.div`
  position:relative;

  span{
    width:160px;
    background:#c0392b;
    padding: 8px;
    border-radius:4px;
    font-size:14px;
    font-weight:700;
    opacity:0;
    transition:opacity 0.4s;
    visibility:hidden;
    text-align:center;

    position:absolute;
    bottom: calc(100% + 12px);
    left:50%;
    transform:translateX(-50%);
    color:#ecf0f1;

    &::before{
      content:'';
      border-style:solid;
      border-color:#c0392b transparent;
      border-width:6px 6px 0 6px;
      top:100%;
      position:absolute;
      left:53%;
      transform:translateX(-50%);
    }
  }

  &:hover span{
    opacity:1;
    visibility: visible;
  }
`;
