import { ReactNode } from "react";

type ButtonAppearance = 'primary' | 'secondary';
type ButtonStyle = 'filled' | 'outline' | 'text' | 'error';

export interface ButtonProps {
  appearance?: ButtonAppearance;
  style?: ButtonStyle;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode
}