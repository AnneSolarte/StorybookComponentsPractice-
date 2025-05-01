import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
    appearance = 'primary',
    style = 'filled',
    loading = false,
    disabled = false,
    children,
    type = 'button',
    onClick
  }) => {
    const isDisabled = disabled || loading;
  
    const baseStyles = 'px-4 py-2 rounded-md border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
    const appearanceStyles = {
      primary: {
        filled: 'bg-blue-600 text-white border-transparent hover:bg-blue-700 focus:ring-blue-500',
        outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        text: 'bg-transparent text-blue-600 border-transparent hover:bg-blue-50 focus:ring-blue-500',
        error: 'bg-red-600 text-white border-transparent hover:bg-red-700 focus:ring-red-500',
      },
      secondary: {
        filled: 'bg-white text-blue-800 border-gray-300 hover:bg-gray-200 focus:ring-gray-400',
        outline: 'bg-transparent text-gray-800 border-gray-400 hover:bg-gray-50 focus:ring-gray-400',
        text: 'bg-transparent text-gray-800 border-transparent hover:bg-gray-100 focus:ring-gray-400',
        error: 'bg-red-100 text-red-700 border-red-300 hover:bg-red-200 focus:ring-red-500',
      },
    };
  
    const disabledStyle = 'opacity-50 cursor-not-allowed';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isDisabled && onClick) {
          onClick(event);
        }
      };
  
    return (
      <button
        className={clsx(
          baseStyles,
          appearanceStyles[appearance][style],
          isDisabled && disabledStyle
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        onClick={handleClick}
        type={type}
      >
        {loading ? 'Cargando...' : children}

        <span className='bg-transparent'></span>
      </button>
    );
  };
  
  export default Button;