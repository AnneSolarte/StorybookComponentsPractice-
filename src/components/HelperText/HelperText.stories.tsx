import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Components/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto a mostrar',
      table: {
        type: { summary: 'string' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'info'],
      description: 'Variante de estado del mensaje',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'HelperTextState' },
      },
    },
    id: {
      control: 'text',
      description: 'ID para asociar con el campo relacionado (accesibilidad)',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    text: 'Helper text',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente para mostrar mensajes de ayuda, validación o feedback contextual.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante por defecto para texto de ayuda general o descriptivo.',
      },
    },
  },
};

export const Error: Story = {
  args: { 
    state: 'error',
    text: 'Este campo es requerido' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante para mostrar mensajes de error o validación fallida.',
      },
    },
  },
};

export const Success: Story = {
  args: { 
    state: 'success',
    text: '¡El formato es correcto!' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante para confirmaciones positivas o validaciones exitosas.',
      },
    },
  },
};

export const Info: Story = {
  args: { 
    state: 'info',
    text: 'La contraseña debe tener al menos 8 caracteres' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante para mensajes informativos o consejos contextuales.',
      },
    },
  },
};

export const WithId: Story = {
  args: { 
    id: 'username-help',
    text: 'El nombre de usuario debe ser único' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con ID para asociar el mensaje con un campo de formulario (mejora accesibilidad).',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: { 
    className: 'font-bold',
    text: 'Mensaje con estilo personalizado' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con clase CSS personalizada para estilos adicionales.',
      },
    },
  },
};