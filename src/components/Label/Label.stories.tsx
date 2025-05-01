import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto principal de la etiqueta',
      table: {
        type: { summary: 'string' },
      },
    },
    htmlFor: {
      control: 'text',
      description: 'ID del elemento asociado (mejora accesibilidad)',
      table: {
        type: { summary: 'string' },
      },
    },
    state: {
      control: 'radio',
      options: ['default', 'required', 'optional'],
      description: 'Indica el estado del campo asociado',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'LabelState' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del texto de la etiqueta',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'LabelSize' },
      },
    },
    appearance: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Estilo visual de la etiqueta',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'LabelAppearance' },
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
    text: 'Label',
    state: 'default',
    size: 'md',
    appearance: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente para etiquetas de formulario con soporte para estados, tamaños y estilos variados.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante por defecto para campos sin indicador de requerido/opcional.',
      },
    },
  },
};

export const Required: Story = {
  args: { 
    state: 'required',
    text: 'Contraseña' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante para campos obligatorios. Muestra un asterisco (*) y cambia el color.',
      },
    },
  },
};

export const Optional: Story = {
  args: { 
    state: 'optional',
    text: 'Teléfono' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante para campos no obligatorios. Muestra texto "(opcional)".',
      },
    },
  },
};

export const SmallSize: Story = {
  args: { 
    size: 'sm',
    text: 'Usuario' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante de tamaño pequeño para espacios reducidos o formularios compactos.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: { 
    size: 'lg',
    text: 'Dirección de envío' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante de tamaño grande para mayor visibilidad o énfasis.',
      },
    },
  },
};

export const SecondaryAppearance: Story = {
  args: { 
    appearance: 'secondary',
    text: 'Comentarios adicionales' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante de estilo secundario para jerarquía visual o campos menos importantes.',
      },
    },
  },
};


export const WithHtmlFor: Story = {
  args: { 
    htmlFor: 'email-input',
    text: 'Correo electrónico' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con htmlFor para asociar la etiqueta con un campo de formulario (mejora accesibilidad).',
      },
    },
  },
};