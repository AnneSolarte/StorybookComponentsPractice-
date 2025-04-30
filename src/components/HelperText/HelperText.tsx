import React from 'react';
import clsx from 'clsx';
import { HelperTextProps } from './HelperText.types';

const stateStyles = {
  default: 'text-gray-600',
  error: 'text-red-600',
  success: 'text-green-600',
  info: 'text-cyan-600',
};

const iconState = {
    error: '❌',
    success: '✅',
    info: 'ℹ️',
}

export const HelperText: React.FC<HelperTextProps> = ({
  text,
  state = 'default',
  id,
}) => {

  if (!text) return null;

  return (
    <p
        id={id}
        role={state === 'error' ? 'alert' : undefined}
        aria-live={state === 'error' ? 'polite' : undefined}
        className={clsx('text-sm mt-1', stateStyles[state])}
    >
        <span className="mr-2">{state !== 'default' ? iconState[state] : null}</span>
        {text}
    </p>
  );
};
