import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs', 'test'],
  args: {
    text: 'Label',
    state: 'default',
    size: 'md',
    appearance: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
  args: { state: 'required' },
};

export const Optional: Story = {
  args: { state: 'optional' },
};
