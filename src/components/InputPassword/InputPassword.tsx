import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import { InputPasswordProps } from './InputPassword.types';
import HelperText from '../HelperText/HelperText';

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  id,
  name,
  value,
  disabled = false,
  className,
  state,
  style,
  helperText = 'Must contain at least 8 characters',
  placeholder,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  const toggleVisibility = () => setVisible(prev => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const calculateStrength = (value: string): 'weak' | 'medium' | 'strong' => {
    const val = value || '';
    if (val.length > 8 && /[A-Z]/.test(val) && /\d/.test(val) && /[^A-Za-z0-9]/.test(val)) return 'strong';
    if (val.length >= 6 && /[A-Z]/.test(val) && /\d/.test(val)) return 'medium';
    return 'weak';
  };

  const strength = calculateStrength(value);

  const inputClasses = clsx(
    'px-3 py-2 border rounded-md w-full text-sm transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    {
      'text-gray-900 bg-white': !disabled,
      'text-gray-500 bg-gray-100 cursor-not-allowed': disabled,
      'border-gray-300': !focused && !disabled,
      'border-blue-500': focused && !disabled,
      'border-red-400': strength === 'weak' && value && !disabled,
      'pr-9': true, 
      'border-red-500': style == 'error',
      
    },
    className
  );

  const strengthColor = {
    weak: 'text-red-600',
    medium: 'text-yellow-600',
    strong: 'text-green-600',
  };

  const strengthText = {
    weak: 'Contraseña débil',
    medium: 'Contraseña media',
    strong: 'Contraseña fuerte',
  };

  return (
    <div className="space-y-1 w-full">
      {label && (
        <Label htmlFor={id} text={label} state={state} />
      )}
      
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          name={name}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          aria-disabled={disabled}
          aria-required={state === 'required' ? true : undefined}
          aria-describedby={helperText ? `${id}-helper` : undefined}
        />

        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          tabIndex={-1}
          disabled={disabled}
        >
          <Icon name={visible ? 'eyeOff' : 'eye'} size={16} />
        </button>
      </div>

      { value && (
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 h-1 rounded-full overflow-hidden bg-gray-200">
            <div 
              className={`h-full ${strengthColor[strength]}`}
              style={{ width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : '100%' }}
            />
          </div>
          <span className={`text-xs ${strengthColor[strength]}`}>
            {strengthText[strength]}
          </span>
        </div>
      )}

       <HelperText 
          id={`${id}-helper`}
          text={helperText} 
          state={style === 'error' ? 'error' : 'default'} 
        />

    </div>
  );
};

export default InputPassword;