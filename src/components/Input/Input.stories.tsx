import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto de la etiqueta del input',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor actual del input',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda o mensaje de validación',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'radio',
      options: ['default', 'error'],
      description: 'Estilo visual del input',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'InputStyle' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'area'],
      description: 'Tipo de input',
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'InputType' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar icono decorativo',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      control: 'select',
      options: ['star', 'chevronDown'],
      description: 'Nombre del icono a mostrar',
      table: {
        defaultValue: { summary: 'star' },
        type: { summary: 'IconName' },
      },
      if: { arg: 'showIcon', eq: true },
    },
    iconPosition: {
      control: 'radio',
      options: ['leading', 'trailing'],
      description: 'Posición del icono',
      table: {
        defaultValue: { summary: 'leading' },
        type: { summary: 'InputIconPosition' },
      },
      if: { arg: 'showIcon', eq: true },
    },
    id: {
      control: 'text',
      description: 'ID único para asociar label con input',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Nombre del campo para formularios',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el input',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    state: {
      control: 'radio',
      options: ['default', 'required', 'optional'],
      description: 'Estado del campo (requerido/opcional)',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'InputLabelState' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Manejador de evento change',
      table: {
        category: 'Events',
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void' },
      },
    },
  },
  args: {
    label: 'Input label',
    value: '',
    helperText: 'Helper text',
    style: 'default',
    type: 'text',
    showIcon: false,
    icon: 'star',
    iconPosition: 'leading',
    id: 'input-id',
    name: 'input-name',
    disabled: false,
    state: 'default',
    placeholder: 'Placeholder text',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente Input flexible para formularios con soporte para múltiples tipos, estados y decoraciones.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input básico para texto con etiqueta y placeholder.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    style: 'error',
    helperText: 'Este campo es requerido',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con estilo de error y mensaje de validación.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    showIcon: true,
    icon: 'star',
    placeholder: 'Buscar...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con icono decorativo o funcional.',
      },
    },
  },
};

export const EmailType: Story = {
  args: {
    type: 'email',
    label: 'Correo electrónico',
    placeholder: 'ejemplo@dominio.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input especializado para direcciones de correo electrónico.',
      },
    },
  },
};

export const TextArea: Story = {
  args: {
    type: 'area',
    label: 'Comentarios',
    placeholder: 'Escribe tus comentarios aquí...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Área de texto multilínea para entradas extensas.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Valor no editable',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input deshabilitado para estados de solo lectura.',
      },
    },
  },
};

export const RequiredField: Story = {
  args: {
    state: 'required',
    label: 'Identificación',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con indicación visual de campo obligatorio.',
      },
    },
  },
};

export const OptionalField: Story = {
  args: {
    state: 'optional',
    label: 'Teléfono',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con indicación visual de campo opcional.',
      },
    },
  },
};