import { ReactNode } from "react";

type ButtonAppearance = 'primary' | 'secondary';
type ButtonStyle = 'filled' | 'outline' | 'text' | 'error';
type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  appearance?: ButtonAppearance;
  style?: ButtonStyle;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  type?: ButtonType;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}