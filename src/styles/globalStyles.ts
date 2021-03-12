import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background-color:#30336B;
    -webkit-font-smoothing:antialiased;
  }

  a{
    text-decoration:none;
  }

  body, input, button{
    font-family:'Ubuntu', serif;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight:700;
  }
  button{
    cursor:pointer;
  }
`;
