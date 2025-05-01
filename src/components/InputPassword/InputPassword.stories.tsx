import { Meta, StoryObj } from '@storybook/react';
import InputPassword from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'Components/Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto de la etiqueta del campo',
      table: {
        type: { summary: 'string' },
      },
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
    value: {
      control: 'text',
      description: 'Valor actual del campo',
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
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el campo',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
      },
    },
    state: {
      control: 'radio',
      options: ['default', 'required', 'optional'],
      description: 'Estado del campo (requerido/opcional)',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'LabelState' },
      },
    },
    style: {
      control: 'radio',
      options: ['default', 'error'],
      description: 'Estilo visual del campo',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'InputStyle' },
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
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
  },
  args: {
    label: 'Contraseña',
    id: 'password',
    name: 'password',
    value: '',
    helperText: 'Debe contener al menos 8 caracteres.',
    disabled: false,
    state: 'default',
    style: 'default',
    placeholder: 'Ingresa tu contraseña',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente especializado para campos de contraseña con indicador de fortaleza y toggle de visibilidad.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input de contraseña estándar con indicador visual de fortaleza y toggle para mostrar/ocultar contraseña.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'myPassword123',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de contraseña en estado deshabilitado. No permite interacción ni muestra el toggle de visibilidad.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    state: 'required',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de contraseña marcado como requerido con indicación visual.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    style: 'error',
    helperText: 'La contraseña no cumple los requisitos',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de contraseña con estilo de error para indicar validación fallida.',
      },
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Mínimo 8 caracteres, una mayúscula y un número',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con placeholder personalizado que indica requisitos de contraseña.',
      },
    },
  },
};

export const WeakPassword: Story = {
  args: {
    value: '123',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra el indicador de fortaleza para una contraseña débil.',
      },
    },
  },
};

export const MediumPassword: Story = {
  args: {
    value: 'Password1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra el indicador de fortaleza para una contraseña media.',
      },
    },
  },
};

export const StrongPassword: Story = {
  args: {
    value: 'Str0ngP@ssw0rd!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra el indicador de fortaleza para una contraseña fuerte.',
      },
    },
  },
};