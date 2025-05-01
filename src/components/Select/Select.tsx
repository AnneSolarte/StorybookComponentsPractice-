import React, { useState, useEffect } from 'react';
import { SelectProps, Option, OptionGroup } from './Select.types';
import clsx from 'clsx';
import Label from '../Label/Label';

const isOptionGroup = (option: Option | OptionGroup): option is OptionGroup => {
  return (option as OptionGroup).options !== undefined;
};

const Select: React.FC<SelectProps> = ({
  options = [],
  value,
  onChange,
  label,
  disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const toggleDropdown = () => {
        if (!disabled) {
        setIsOpen(!isOpen);
        }
    };

    const handleOptionClick = (optionValue: string) => {
        setSelectedValue(optionValue);
        onChange(optionValue);
        setIsOpen(false);
    };

    const findSelectedOption = (): Option | null => {
        for (const item of options) {
        if (isOptionGroup(item)) {
            const found = item.options.find(opt => opt.value === selectedValue);
            if (found) return found;
        } else {
            if (item.value === selectedValue) return item;
        }
        }
        return null;
    };

    const selectedOption = findSelectedOption();
    const displayValue = selectedOption?.label || '';

    const renderOptions = () => {
        if (options.length === 0) {
        return <div className="px-4 py-2 text-gray-500">No hay opciones disponibles</div>;
        }

        return options.map((item, index) => {
        if (isOptionGroup(item)) {
            return (
            <div key={`group-${index}`} className="border-t border-gray-100 first:border-t-0">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {item.label}
                </div>
                {item.options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => !option.disabled && handleOptionClick(option.value)}
                    disabled={option.disabled}
                    className={clsx(
                    'w-full px-4 py-2 text-left transition-colors flex items-center',
                    {
                        'bg-blue-100 text-blue-700 font-medium': selectedValue === option.value,
                        'text-gray-400 cursor-not-allowed': option.disabled,
                        'text-gray-700 hover:bg-gray-50': !option.disabled && selectedValue !== option.value,
                    }
                    )}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    aria-disabled={option.disabled}
                >
                    {selectedValue === option.value && (
                    <svg
                        className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    )}
                    <span className="truncate">{option.label}</span>
                </button>
                ))}
            </div>
            );
        } else {
            return (
            <button
                key={item.value}
                onClick={() => !item.disabled && handleOptionClick(item.value)}
                disabled={item.disabled}
                className={clsx(
                'w-full px-4 py-2 text-left transition-colors flex items-center',
                {
                    'bg-blue-100 text-blue-700 font-medium': selectedValue === item.value,
                    'text-gray-400 cursor-not-allowed': item.disabled,
                    'text-gray-700 hover:bg-gray-50': !item.disabled && selectedValue !== item.value,
                }
                )}
                role="option"
                aria-selected={selectedValue === item.value}
                aria-disabled={item.disabled}
            >
                {selectedValue === item.value && (
                <svg
                    className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                    />
                </svg>
                )}
                <span className="truncate">{item.label}</span>
            </button>
            );
        }
        });
    };

  return (
    <div className="relative w-full">
      {label && (
        <Label
          text={label}
          htmlFor="select-input"
        />
      )}

      <div className="relative w-full">
        <button
          id="select-input"
          onClick={toggleDropdown}
          className={clsx(
            'w-full px-4 py-2 text-left bg-white border rounded-md transition-all duration-200 flex items-center justify-between',
            {
              'border-blue-500 ring-1 ring-blue-500': isOpen,
              'border-gray-300': !isOpen,
              'cursor-not-allowed opacity-50 bg-gray-100': disabled,
              'cursor-pointer hover:border-gray-400': !disabled,
              'text-gray-800': selectedValue,
              'text-gray-500': !selectedValue,
            }
          )}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">
            {selectedValue ? displayValue : 'Seleccione una opción'}
          </span>
          <span className="ml-2 flex-shrink-0">
            <svg
              className={clsx(
                'w-5 h-5 transition-transform duration-200',
                {
                  'text-gray-700': selectedValue,
                  'text-gray-400': !selectedValue,
                  'transform rotate-180': isOpen,
                }
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div
            className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden'
            role="listbox"
          >
            <div className="max-h-60 overflow-y-auto">
              {renderOptions()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;