export type HelperTextState = 'default' | 'error' | 'success' | 'info';

export interface HelperTextProps {
  text?: string;
  state?: HelperTextState;
  id?: string;
  className?: string
}