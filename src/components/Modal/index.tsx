import React, { useCallback, useState } from 'react';

import {
  Container, Content, Title, Description, ButtonConfirmation, ButtonCancel,
} from './styles';

interface ModalProps{
  title:string,
  name:string,
  handleOpenModal():void;
  showModal:boolean;
  handleDelete():void;
}

const Modal:React.FC<ModalProps> = ({
  title, name, showModal, handleOpenModal, handleDelete,
}) => (
  <Container showModal={showModal}>
    <Content>
      <Title>Atenção</Title>
      <Description>
        Tem certeza que deseja excluir o
        {' '}
        {title}
        {' '}
        <strong>{name}</strong>
        {' '}
        ?
      </Description>
      <div>
        <ButtonConfirmation onClick={handleDelete}>Sim</ButtonConfirmation>
        <ButtonCancel onClick={handleOpenModal}>Cancelar</ButtonCancel>
      </div>
    </Content>
  </Container>
);

export default Modal;
