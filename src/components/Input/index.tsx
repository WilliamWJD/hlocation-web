import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface InputProps{
  inputName:string;
  placeholderText:string;
  Icon?:React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  inputName, placeholderText, Icon, ...rest
}) => (
  <Container>
    {Icon && <Icon size={27} color="7F8C8D" />}
    <input
      name={inputName}
      placeholder={placeholderText}
      {...rest}
    />
  </Container>
);

export default Input;
