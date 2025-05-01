export type IconName =
    | 'star'
    | 'info'
    | 'success'
    | 'error'
    | 'eye'
    | 'eyeOff'
    | 'chevronDown'
    | 'chevronUp'
    | 'check'
;

export type IconComponentProps = {
    fill?: string;
    size?: number | string;
    className?: string
};
  
export type IconProps = IconComponentProps & {
    name: IconName;
};