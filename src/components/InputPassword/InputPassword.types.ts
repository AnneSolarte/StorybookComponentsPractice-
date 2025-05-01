export type LabelState = 'default' | 'required' | 'optional';
export type InputStyle = 'default' | 'error'; 

export interface InputPasswordProps {
  label: string;
  id: string;
  name: string;
  value: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  state?: LabelState;
  style?: InputStyle;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
