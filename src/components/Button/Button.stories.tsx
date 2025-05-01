import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Variante de apariencia del botón',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'ButtonAppearance' },
      },
    },
    style: {
      control: 'select',
      options: ['filled', 'outline', 'text', 'error'],
      description: 'Estilo visual del botón',
      table: {
        defaultValue: { summary: 'filled' },
        type: { summary: 'ButtonStyle' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Muestra un indicador de carga',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción con el botón',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Tipo nativo del elemento button',
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: 'ButtonType' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: { 
      action: 'clicked',
      description: 'Manejador de evento click',
      table: {
        category: 'Events',
        type: { summary: '(event: React.MouseEvent<HTMLButtonElement>) => void' },
      },
    },
  },
  args: {
    appearance: 'primary',
    style: 'filled',
    loading: false,
    disabled: false,
    type: 'button',
    children: 'Mi Botón',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente Button personalizable con múltiples variantes de estilo y apariencia.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FilledPrimary: Story = {
  args: {
    children: 'Primario Filled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante principal para acciones importantes. Usar como CTA principal.',
      },
    },
  },
};

export const WithAlert: Story = {
  args: {
    children: 'Mostrar alerta',
    onClick: () => alert('¡Hiciste click!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de botón con acción que muestra una alerta.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo avanzado que previene el comportamiento por defecto y registra el evento.',
      },
    },
  },
};

export const LoadingButton: Story = {
  args: {
    children: 'Procesando...',
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Deshabilitado',
    disabled: true,
  },
};

export const ErrorButton: Story = {
  args: {
    children: 'Eliminar',
    style: 'error',
  },
};