
import { IconProps } from './Icon.types';
import { IconComponents } from '../../utils/icons';

export const Icon: React.FC<IconProps> = ({ name, fill, size = 24 }) => {
  const SelectedIcon = IconComponents[name];
  return SelectedIcon ? <SelectedIcon fill={fill} size={size} /> : null;
};

export default Icon;