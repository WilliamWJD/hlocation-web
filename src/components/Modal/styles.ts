import styled, { css, keyframes } from 'styled-components';

interface ContainerProps{
    showModal:boolean;
}

export const Container = styled.div<ContainerProps>`
    position:absolute;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.3);

    display:${(props) => (props.showModal ? css`flex` : css`none`)};
    justify-content:center;
    align-items:center;
    z-index:999;
`;

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateY(-50px);
  }
  to{
    opacity:1;
    tranform:translateX(0)
  }
`;

export const Content = styled.div`
    width:400px;
    height:200px;
    background-color:#ffff;
    border-radius:10px;
    padding:20px;

    animation:${appearFromRight} 0.8s;

    > div{
        margin-top:20px;

        display:flex;
        justify-content:flex-end;
    }
`;

export const Title = styled.h1`
    color:#34495E;
    font-size:28px;
`;

export const Description = styled.p`
    margin-top:10px;

    strong{
        color:#c0392b;
    }
`;

export const ButtonConfirmation = styled.button`
    border:none;
    padding: 10px 30px;
    border-radius:5px;
    background-color:#27ae60;
    color:#fff;
    font-weight:bold;
    margin-right:5px;
`;

export const ButtonCancel = styled.button`
    border:none;
    padding: 10px 30px;
    border-radius:5px;
    background-color:#e74c3c;
    color:#fff;
    font-weight:bold;
`;
