import React from 'react';

export default function Inputs({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onClick,
  
  disabled = false,
}) {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <div
        onClick={onClick}
        className={`flex items-center bg-blue-500 rounded-2xl px-4 py-3  ${
          disabled
            ? 'bg-blue-200'
            : 'bg-green-600'
        }`}
      >
        <input
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className="bg-transparent text-white placeholder-gray-200 outline-none text-lg w-full"
        />
      </div>
    </div>
  );
}
