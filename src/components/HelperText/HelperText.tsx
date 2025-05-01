import React from 'react';
import clsx from 'clsx';
import { HelperTextProps } from './HelperText.types';
import Icon from '../Icon/Icon';

const stateStyles = {
  default: 'text-gray-600',
  error: 'text-red-600',
  success: 'text-green-600',
  info: 'text-cyan-600',
};

export const HelperText: React.FC<HelperTextProps> = ({
  text,
  state = 'default',
  id,
  className
}) => {

  if (!text) return null;

  return (
    <p
        id={id}
        role={state === 'error' ? 'alert' : undefined}
        aria-live={state === 'error' ? 'polite' : undefined}
        className={clsx('text-sm mt-1', stateStyles[state], className)}
    >   
        <span className="flex row gap-2 items-center">
            {state !== 'default' && <Icon name={state} />}
            {text}
        </span>
        
    </p>
  );
};

export default HelperText;