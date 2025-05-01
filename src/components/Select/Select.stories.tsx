import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { Option, OptionGroup } from './Select.types';

const meta: Meta<typeof Select> = {
  tags: ['autodocs'],
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    options: {
      control: 'object',
      description: 'Opciones para el select (pueden estar agrupadas)',
      table: {
        type: { summary: 'SelectOption[]' },
      },
    },
    id: {
      control: 'text',
      description: 'ID único para asociar label con select',
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
      description: 'Valor actualmente seleccionado',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el select',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto de la etiqueta',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'radio',
      options: ['default', 'error'],
      description: 'Estilo visual del select',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'InputStyle' },
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
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
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
    placeholder: {
      control: 'text',
      description: 'Texto cuando no hay selección',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Manejador de evento change',
      table: {
        category: 'Events',
        type: { summary: '(e: React.ChangeEvent<HTMLSelectElement>) => void' },
      },
    },
  },
  args: {
    id: 'select-id',
    name: 'select-name',
    value: '',
    label: 'Seleccione una opción',
    placeholder: 'Elige una opción',
    disabled: false,
    style: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente Select personalizable con soporte para opciones agrupadas, estados y validación visual.',
      },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const simpleOptions: Option[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3', disabled: true },
];

const groupedOptions: (Option | OptionGroup)[] = [
  {
    label: 'Diseño de Medios Interactivos',
    options: [
      { value: 'ux', label: 'UX Design' },
      { value: 'ui', label: 'UI Design' },
      { value: 'dev', label: 'Development', disabled: true },
    ],
  },
  {
    label: 'Ingeniería de Sistemas',
    options: [
      { value: 'data', label: 'Análisis de datos' },
      { value: 'back', label: 'Backend' },
    ],
  },
  { value: 'other', label: 'Otras carreras' }, 
];

export const Simple: Story = {
  args: {
    options: simpleOptions,
  },
  render: (args) => (
    <div className="max-w-xs">
      <Select {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select básico con lista simple de opciones no agrupadas.',
      },
    },
  },
};

export const WithGroups: Story = {
  name: 'Con Grupos de Opciones',
  args: {
    options: groupedOptions,
    label: 'Seleccione un área de carrera',
  },
  render: (args) => (
    <div className="max-w-xs">
      <Select {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select con opciones organizadas en grupos lógicos para mejor organización y usabilidad.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: simpleOptions,
    value: '2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select en estado deshabilitado. No permite interacción pero muestra la selección actual.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    options: simpleOptions,
    style: 'error',
    helperText: 'Debes seleccionar una opción válida',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con estilo de error para indicar validación fallida o selección inválida.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    options: simpleOptions,
    state: 'required',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select marcado como requerido con indicación visual (asterisco).',
      },
    },
  },
};

export const WithPreselectedValue: Story = {
  args: {
    options: simpleOptions,
    value: '2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con opción preseleccionada para edición de datos existentes.',
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: simpleOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select que incluye opciones deshabilitadas (no seleccionables).',
      },
    },
  },
};
