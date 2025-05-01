import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { Option, OptionGroup } from './Select.types';

const meta: Meta<typeof Select> = {
  tags: ['autodocs', 'test'],
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  }
};

export default meta;

type Story = StoryObj<typeof Select>;

const simpleOptions: Option[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3' },
];

const groupedOptions: (Option | OptionGroup)[] = [
  {
    label: 'Diseño de Medios Interactivos',
    options: [
      { value: 'ux', label: 'Ux Design' },
      { value: 'ui', label: 'Ui Design ' },
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
    label: 'Seleccione una opción',
    options: simpleOptions,
  },
  render: (args) => {
    return (
      <div className="max-w-xs">
        <Select {...args} />
      </div>
    );
  },
};

export const WithGroups: Story = {
  name: 'Con Grupos de Opciones',
  args: {
    label: 'Seleccione un área de carrera',
    options: groupedOptions,
  },
  render: (args) => {
    return (
      <div className="max-w-xs">
        <Select {...args} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Select deshabilitado',
    options: simpleOptions,
  },
};
