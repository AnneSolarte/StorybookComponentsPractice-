import { IconName } from "../Icon/Icon.types";

export type InputStyle = 'default' | 'error'; 
export type InputType = 'text' | 'email' | 'area'; 
export type InputIconPosition = 'leading' | 'trailing'
export type InputLabelState = 'default' | 'required' | 'optional';

export type InputProps = {
  label: string;
  value: string;
  helperText?: string;
  style?: InputStyle;
  type?: InputType;
  showIcon?: boolean;
  icon?: IconName;
  iconPosition?: InputIconPosition;
  id: string;
  name: string;
  disabled?: boolean;
  state?: InputLabelState;
  className?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
};