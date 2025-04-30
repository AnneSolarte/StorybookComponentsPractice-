import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import HelperText from '../HelperText/HelperText';
import { InputPasswordProps } from './InputPassword.types';

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  id,
  helperText,
  disabled = false,
  onChange
}) => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState(false);

  const toggleVisibility = () => setVisible(prev => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    onChange?.(value);
  };

  const calculateStrength = (value: string): 'weak' | 'medium' | 'strong' => {
    if (value.length > 8 && /[A-Z]/.test(value) && /\d/.test(value)) return 'strong';
    if (value.length >= 6) return 'medium';
    return 'weak';
  };

  const strength = calculateStrength(password);

  const inputClasses = clsx(
    'px-4 py-2 mt-1 border rounded-md w-full text-sm focus:outline-none text-gray-600',
    {
      'border-gray-500': !focused,
      'border-blue-500': focused,
      'bg-gray-100 text-gray-400 cursor-not-allowed': disabled,
    }
  );

  const strengthColor = {
    weak: 'text-red-500',
    medium: 'text-yellow-500',
    strong: 'text-green-600',
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id} text={label} />
      <div className="relative w-full">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClasses}
          disabled={disabled}
          aria-disabled={disabled}
        />

        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          tabIndex={-1}
        >
          <Icon name={visible ? 'eyeOff' : 'eye'} fill="#000" size={18} />
        </button>
      </div>

      {strength && password && (
        <div className={`text-xs mt-1 ${strengthColor[strength]}`}>
          {strength === 'weak' ? (
              <HelperText text="La contraseña es débil." state="error" />
          ) : strength === 'medium' ? (
              <HelperText text="La contraseña es media." state="success" />
          ) : (
              <HelperText text="La contraseña es fuerte." state="success" />
          )}
        </div>
      )}

      {!password && helperText && <HelperText text={helperText} />}
    </div>
  );
};

export default InputPassword;
