import React from 'react';
import Modal from 'react-modal';

// Configurar el elemento principal para accesibilidad de React Modal
Modal.setAppElement('#root');

const ModalPopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Promoción Especial"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          width: '400px',
          borderRadius: '10px',
          textAlign: 'center',
        },
      }}
    >
      <h2>¡Promoción especial!</h2>
      <p>
        Usa el cupón <b>"HOLA15"</b> para obtener un 15% de descuento.
      </p>
      <button
        onClick={onClose}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
        }}
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default ModalPopup;


