import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      darkMode: {
        dark: { ...themes.dark, appBg: '#1E293B' },
        light: { ...themes.normal, appBg: '#FFFFFF' },
        current: 'light',
        stylePreview: true,
      },
    },
  },
  
};

export default preview;
