import { IconName } from "../Icon/Icon.types";

export type InputStyle = 'default' | 'focus' | 'error'; 
export type InputIconPosition = 'leading' | 'trailing'
export type InputLabelState = 'default' | 'required' | 'optional';

export type InputProps = {
  label: string;
  helperText?: string;
  errorText?: string;
  style?: InputStyle;
  showIcon?: boolean;
  icon: IconName;
  iconPosition?: InputIconPosition;
  id: string;
  disabled?: boolean;
  state?: InputLabelState;
};