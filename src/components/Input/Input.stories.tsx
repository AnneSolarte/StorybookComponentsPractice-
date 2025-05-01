import type { Meta, StoryObj } from '@storybook/react';
import Label from './Input';

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Input',
  component: Label,
  tags: ['autodocs', 'test'],
  args: {
    label: 'Input label',
    helperText: 'Message',
    style: 'default',
    showIcon: false,
    icon: 'star',
    iconPosition: 'leading',
    disabled: false,
    state: 'default'
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

