import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs', 'test'],
  args: {
    text: 'Label',
    status: 'default',
    size: 'md',
    appearance: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
    args: { status: 'required' },
  };
  
  export const Optional: Story = {
    args: { status: 'optional' },
  };