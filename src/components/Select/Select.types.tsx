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

export interface SelectProps {
  options?: SelectOption[];
  value: string;
  placeholder?: string;
  disabled?: boolean;
  label: string;
  onChange: (value: string) => void;
}
