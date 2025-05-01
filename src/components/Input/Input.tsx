import React, { useState } from 'react';
import clsx from 'clsx';
import Label from '../Label/Label';
import HelperText from '../HelperText/HelperText';
import { InputProps } from './Input.types';
import Icon from '../Icon/Icon';

const Input: React.FC<InputProps> = ({
  label,
  value,
  helperText,
  type = 'text',
  style = 'default',
  showIcon = false,
  icon = 'star',
  iconPosition = 'leading',
  id,
  name,
  disabled = false,
  state,
  className,
  placeholder,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const inputClasses = clsx(
    'px-3 py-2 border rounded-md w-full text-sm transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    
    {
      'text-gray-900 bg-white': !disabled,
      'text-gray-500 bg-gray-100 cursor-not-allowed': disabled,
      'border-gray-300': style === 'default' && !focused && !disabled,
      'border-blue-500': focused && style !== 'error' && !disabled,
      'border-red-500': style === 'error' && !disabled,
      'pl-9': showIcon && iconPosition === 'leading',
      'pr-9': showIcon && iconPosition === 'trailing',
      'h-20 text-left align-top': type === 'area'
    },
    className
  );

  return (
    <div className="space-y-1 w-full">
      {label && (
        <Label htmlFor={id} text={label} state={state} />
      )}
      
      <div className="relative">
        {showIcon && iconPosition === 'leading' && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name={icon} size={16} className="text-gray-400" />
          </div>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={inputClasses}
          aria-invalid={style === 'error'}
          aria-disabled={disabled}
          aria-required={state === 'required' ? true : undefined}
          aria-describedby={helperText ? `${id}-helper` : undefined}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
        />

        {showIcon && iconPosition === 'trailing' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon name={icon} size={16} className="text-gray-400" />
          </div>
        )}
      </div>

      {helperText && (
        <HelperText 
          id={`${id}-helper`}
          text={helperText} 
          state={style === 'error' ? 'error' : 'default'} 
        />
      )}
    </div>
  );
};

export default Input;