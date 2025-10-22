import React from 'react';

export const Buttons = ({ disabled, onClick, children }) => {
  return (
    <button
      // onClick={onClick}
      disabled={disabled}
      className={`text-white m-4 text-2xl px-10 py-4 rounded-full transition-all duration-300 
        ${disabled 
          ? 'bg-blue-200' 
          : 'bg-green-400'
        }`}
    >
      {children}
    </button>
  );
};
