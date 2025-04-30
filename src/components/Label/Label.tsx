import React from 'react';
import { LabelProps } from './Label.types';
import clsx from 'clsx';

const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
};
  
const appearanceStyles = {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
};

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    status = 'default',
    size = 'md',
    appearance = 'primary',
}) => {
    const baseStyle = 'block font-medium';
    const statusElement =
      status === 'required' ? <span className="text-red-500 ml-1">*</span> :
      status === 'optional' ? <span className="text-gray-400 ml-1 italic">(opcional)</span> : null;
  
    return (
      <label
        htmlFor={htmlFor}
        className={clsx(baseStyle, sizeStyles[size], appearanceStyles[appearance])}
        aria-required={status === 'required' || undefined}
      >
        {text}
        {statusElement}
      </label>
    );
};

export default Label;