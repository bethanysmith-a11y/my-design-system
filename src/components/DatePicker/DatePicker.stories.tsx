import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3927&m=dev';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Date of birth',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Date of birth',
    hint: 'mm/dd/yyyy',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Date of birth',
    hint: 'mm/dd/yyyy',
    value: '02/14/1990',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Date of birth',
    disabled: true,
  },
};
