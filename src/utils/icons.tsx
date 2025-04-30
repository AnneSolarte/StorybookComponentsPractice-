
import { IconComponentProps, IconName } from '../components/Icon/Icon.types';


export const IconComponents: Record<IconName, React.FC<IconComponentProps>> = {
  inicio: ({ fill, size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      className={`fill-current ${fill}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.37146 16.2857V11.1429H10.6286V16.2857H14.7V9.42858H17.1429L9.00004 1.71429L0.857178 9.42858H3.30003V16.2857H7.37146Z"
        fill={fill}
      />
    </svg>
  ),
};

