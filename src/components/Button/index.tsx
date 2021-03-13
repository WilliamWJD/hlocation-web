import React from 'react';

import { Container } from './styles';

interface ButtonProps{
  title:string;
}

const Button: React.FC<ButtonProps> = ({ title }) => (
  <Container>
    <strong>{title}</strong>
  </Container>
);

export default Button;
