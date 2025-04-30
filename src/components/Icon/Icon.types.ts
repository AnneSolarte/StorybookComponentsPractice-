export type IconName =
    | 'inicio'
;

export type IconComponentProps = {
    fill: string;
    size?: number | string;
};
  
export type IconProps = IconComponentProps & {
    name: IconName;
};