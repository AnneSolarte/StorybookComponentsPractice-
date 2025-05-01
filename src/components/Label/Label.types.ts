export type LabelSize = 'sm' | 'md' | 'lg';
export type LabelState = 'default' | 'required' | 'optional';
export type LabelAppearance = 'primary' | 'secondary';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  state?: LabelState;
  size?: LabelSize;
  appearance?: LabelAppearance;
  className?: string
}