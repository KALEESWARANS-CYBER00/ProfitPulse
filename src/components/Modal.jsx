import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
