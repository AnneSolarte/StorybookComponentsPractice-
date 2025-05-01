import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    appearance: 'primary',
    style: 'filled',
    onClick: () => console.log('Hice cliiick'),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FilledPrimary: Story = {
  args: {
    children: 'Primario Filled',
  },
};

export const WithAlert: Story = {
  args: {
    children: 'Mostrar alerta',
    onClick: () => alert('¡Hiciste click!'),
  },
};

export const WithComplexAction: Story = {
  args: {
    children: 'Acción compleja',
    onClick: (e) => {
      e.preventDefault();
      console.log('Evento:', e);
      alert('Evento prevenido y registrado en consola');
    },
  },
};