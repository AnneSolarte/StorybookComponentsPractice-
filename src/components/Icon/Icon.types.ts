export type IconName =
    | 'star'
    | 'info'
    | 'success'
    | 'error'
    | 'eye'
    | 'eyeOff'
    | 'arrowDown'
    | 'arrowUp'
    | 'check'
;

export type IconComponentProps = {
    fill?: string;
    size?: number | string;
};
  
export type IconProps = IconComponentProps & {
    name: IconName;
};