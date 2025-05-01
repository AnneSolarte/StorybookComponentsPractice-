import { Meta, StoryObj } from '@storybook/react';
import InputPassword from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'Components/Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs', 'test'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    label: 'Contraseña',
    id: 'password',
    helperText: 'Debe contener al menos 8 caracteres.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Contraseña',
    id: 'password',
    helperText: 'Debe contener al menos 8 caracteres.',
    disabled: true,
  },
};

export const WithoutStrengthIndicator: Story = {
  args: {
    label: 'Contraseña',
    id: 'password',
    helperText: 'Debe contener al menos 8 caracteres.',
  },
};
