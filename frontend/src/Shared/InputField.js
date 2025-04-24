// src/Shared/InputField.js
import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 mt-1 w-full"
      />
    </div>
  );
};

export default InputField;