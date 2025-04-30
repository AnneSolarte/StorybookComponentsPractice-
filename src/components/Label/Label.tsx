import React from 'react';
import { LabelProps } from './Label.types';
import clsx from 'clsx';

const sizeStyles = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
};
  
const appearanceStyles = {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
};

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    state = 'default',
    size = 'md',
    appearance = 'primary',
}) => {
    const baseStyle = 'block font-medium';
    const stateElement =
      state === 'required' ? <span className="text-red-500 ml-1">*</span> :
      state === 'optional' ? <span className="text-gray-400 ml-1 italic">(opcional)</span> : null;
  
    return (
      <label
        htmlFor={htmlFor}
        className={clsx(baseStyle, sizeStyles[size], appearanceStyles[appearance])}
        aria-required={state === 'required' || undefined}
      >
        {text}
        {stateElement}        
      </label>
    );
};

export default Label;