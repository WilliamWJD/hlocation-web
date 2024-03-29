import React, {
  InputHTMLAttributes, useCallback, useEffect, useRef, useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  Icon?:React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name, Icon, ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const hendleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={27} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={hendleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
      <Error title={error}>
        <FiAlertCircle color="#c0392b" size={20} />
      </Error>
      )}
    </Container>
  );
};

export default Input;
