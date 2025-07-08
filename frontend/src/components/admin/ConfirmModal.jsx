import React from 'react';
import ReactDOM from 'react-dom';
import './styles/ConfirmModal.css';

const ConfirmModal = ({ message, onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <p className="confirm-message">{message}</p>
        <div className="confirm-buttons">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-confirm" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
