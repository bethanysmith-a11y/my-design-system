import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileInput } from './FileInput';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-4140&m=dev';

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Input accepts a single file',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Input accepts a single file',
    helperText: 'Select a PDF, JPG, or PNG file',
    accept: '.pdf,.jpg,.png',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Input accepts multiple files',
    helperText: 'Select one or more files',
    multiple: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'File input',
    disabled: true,
  },
};
