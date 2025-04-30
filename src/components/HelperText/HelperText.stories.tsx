import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Components/HelperText',
  component: HelperText,
  tags: ['autodocs', 'test'],
  args: {
    text: 'Helper text',
    state: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {};

export const Error: Story = {
  args: { state: 'error' },
};

export const Success: Story = {
  args: { state: 'success' },
};

export const Info: Story = {
    args: { state: 'info' },
  };
