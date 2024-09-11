import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  value?: string;
  placeholderColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder = '', 
  size = 'small', 
  variant = 'primary', 
  value = '', 
  placeholderColor = 'placeholder-black-800',
  onChange 
}) => {
  const baseClasses = 'rounded-lg border focus:outline-none ';
  
  // Size variations
  const sizeClasses = {
    small: 'px-3 py-3 text-sm font-medium mt-1',
    medium: 'px-4 py-3 text-base',
    large: 'px-5 py-4 text-lg',
  }[size];

  // Variant styling
  const variantClasses = {
    primary: 'border-gray-300 ',
    secondary: 'border-gray-400 focus:ring-gray-500',
  }[variant];
                    // className="w-full p-3 border border-gray-300 rounded-md text-sm font-medium mt-1 mb-4 focus:outline-gray-300"
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} w-full  ${placeholderColor}`}
    />
  );
};

export default Input;
