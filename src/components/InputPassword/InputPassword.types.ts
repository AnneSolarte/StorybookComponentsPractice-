export interface InputPasswordProps {
  label: string;
  id: string;
  helperText?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
