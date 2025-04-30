export type IconName =
    | 'star'
    | 'info'
    | 'success'
    | 'error'
    | 'eye'
    | 'eyeOff'
;

export type IconComponentProps = {
    fill?: string;
    size?: number | string;
};
  
export type IconProps = IconComponentProps & {
    name: IconName;
};