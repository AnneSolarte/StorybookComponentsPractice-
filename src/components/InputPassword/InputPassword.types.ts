export interface InputPasswordProps {
  label: string;
  id: string;
  value: string;
  helperText?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
