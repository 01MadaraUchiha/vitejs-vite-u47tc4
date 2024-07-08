import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-3/5 h-3/5 p-6 rounded-lg shadow-lg overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <div className="h-full overflow-y-auto pb-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
