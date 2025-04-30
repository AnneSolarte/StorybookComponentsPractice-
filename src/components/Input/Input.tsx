import React, { useState } from 'react';
import clsx from 'clsx';
import Label from '../Label/Label'; 
import HelperText from '../HelperText/HelperText'; 
import { InputProps } from './Input.types';
import Icon from '../Icon/Icon';

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  style = 'default',
  showIcon = false,
  icon = 'inicio',
  iconPosition = 'leading',
  id,
  disabled = false,
  state
}) => {
  const [focused, setFocused] = useState(false);

  const inputClasses = clsx(
    'px-4 py-2 mt-1 border rounded-md w-full focus:outline-none text-sm',
    {
      'text-gray-600': !disabled,
      'text-gray-400 bg-gray-100 cursor-not-allowed': disabled,
      'border-gray-500': style === 'default' && !focused && !disabled,
      'border-blue-500': (style === 'focus' || focused) && style !== 'error' && !disabled,
      'border-red-500': style === 'error' && !disabled,
      'border-gray-200': disabled,
      'pl-10': showIcon && iconPosition === 'leading',
      'pr-10': showIcon && iconPosition === 'trailing',
    }
  );

  return (
    <div className="space-y-2">
      <div>
        <Label htmlFor={id} text={label} state={state} />
          <div className="relative w-full">
            {showIcon && iconPosition === 'leading' && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name={icon} fill="#000000" size={18} />
              </div>
            )}

            <input
              id={id}
              type="text"
              className={inputClasses}
                aria-invalid={style === 'error'}
                aria-disabled={disabled}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                disabled={disabled}
              />

              {showIcon && iconPosition === 'trailing' && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Icon name={icon} fill="#000000" size={18} />
                </div>
              )}
            </div>
      </div>
      {style === 'error' && helperText && (
        <HelperText text={helperText} state="error" />
      )}
    </div>
  );
};

export default Input;
