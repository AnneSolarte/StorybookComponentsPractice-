import { IconProps } from './Icon.types';
import { IconComponents } from '../../utils/icons';
import clsx from 'clsx';

export const Icon: React.FC<IconProps> = ({ 
  name, 
  fill, 
  size = 24, 
  className 
}) => {
  const SelectedIcon = IconComponents[name];
  
  if (!SelectedIcon) return null;

  return (
    <span className={clsx('inline-flex', className)}>
      <SelectedIcon fill={fill} size={size} />
    </span>
  );
};

export default Icon;