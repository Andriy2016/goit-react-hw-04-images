import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

const Modal = ({ imageUrl, imageTags, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalContainer>
        <img src={imageUrl} alt={imageTags} />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTags: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;