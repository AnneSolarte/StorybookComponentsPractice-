export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface OptionGroup {
  label: string;
  options: Option[];
}

export type SelectOption = Option | OptionGroup;
export type LabelState = 'default' | 'required' | 'optional';
export type InputStyle = 'default' | 'error'; 

export interface SelectProps {
  options?: SelectOption[];
  id: string;
  name: string;
  value: string;
  disabled?: boolean;
  label: string;
  style: InputStyle;
  state: LabelState;
  className?: string;
  helperText?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
