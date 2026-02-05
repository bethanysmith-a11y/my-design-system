import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComboBox } from './ComboBox';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3864&m=dev';

const stateOptions = [
  { value: 'al', label: 'Alabama' },
  { value: 'ak', label: 'Alaska' },
  { value: 'az', label: 'Arizona' },
  { value: 'ar', label: 'Arkansas' },
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado' },
  { value: 'ct', label: 'Connecticut' },
  { value: 'de', label: 'Delaware' },
  { value: 'fl', label: 'Florida' },
  { value: 'ga', label: 'Georgia' },
];

const meta = {
  title: 'Components/ComboBox',
  component: ComboBox,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select a state',
    options: stateOptions,
    placeholder: 'Select an option',
  },
};

export const WithPreselected: Story = {
  args: {
    label: 'Select a state',
    options: stateOptions,
    value: 'ca',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select a state',
    options: stateOptions,
    disabled: true,
  },
};
