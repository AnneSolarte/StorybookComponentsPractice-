export type LabelSize = 'sm' | 'md' | 'lg';
export type LabelStatus = 'default' | 'required' | 'optional';
export type LabelAppearance = 'primary' | 'secondary';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  status?: LabelStatus;
  size?: LabelSize;
  appearance?: LabelAppearance;
}