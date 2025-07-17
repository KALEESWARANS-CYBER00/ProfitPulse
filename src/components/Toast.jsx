import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span>{message}</span>
      <button
        className="toast-close"
        onClick={onClose}
        aria-label="Close Toast"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
