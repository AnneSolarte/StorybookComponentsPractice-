// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    appearance: 'primary',
    style: 'filled',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FilledPrimary: Story = {
  args: {
    children: 'Primario Filled',
    appearance: 'primary',
    style: 'filled',
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: 'Secundario Outline',
    appearance: 'secondary',
    style: 'outline',
  },
};

export const Text: Story = {
  args: {
    children: 'Solo texto',
    appearance: 'primary',
    style: 'text',
  },
};

export const ErrorButton: Story = {
  args: {
    children: 'Error',
    appearance: 'primary',
    style: 'error',
  },
};

export const Loading: Story = {
  args: {
    children: 'Cargando...',
    appearance: 'primary',
    style: 'filled',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Deshabilitado',
    appearance: 'secondary',
    style: 'filled',
    disabled: true,
  },
};
