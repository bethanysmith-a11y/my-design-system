import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, Textarea } from './Input';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3213&m=dev';

/* ===== Input ===== */

const inputMeta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default inputMeta;
type Story = StoryObj<typeof inputMeta>;

export const Default: Story = {
  args: {
    label: 'Text input label',
    placeholder: 'Sample input text',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Text input label',
    helperText: 'Helper text',
    placeholder: 'Sample input text',
  },
};

export const Required: Story = {
  args: {
    label: 'Text input label',
    required: true,
    placeholder: 'Sample input text',
  },
};

export const Error: Story = {
  args: {
    label: 'Text input label',
    error: 'Helpful error message',
    defaultValue: 'Sample input text',
  },
};

export const ErrorWithHelper: Story = {
  args: {
    label: 'Text input label',
    helperText: 'Helper text',
    error: 'Helpful error message',
    defaultValue: 'Sample input text',
  },
};

export const Success: Story = {
  args: {
    label: 'Text input label',
    success: true,
    defaultValue: 'Sample input text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Text input label',
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-6">
      <Input label="Default" placeholder="Sample input text" />
      <Input label="With helper" helperText="Helper text" placeholder="Sample input text" />
      <Input label="Required" required placeholder="Sample input text" />
      <Input label="Error" error="Helpful error message" defaultValue="Bad value" />
      <Input label="Success" success defaultValue="Good value" />
      <Input label="Disabled" disabled placeholder="Disabled input" />
    </div>
  ),
};

/* ===== Prefix / Suffix ===== */

const searchIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

export const WithPrefix: Story = {
  args: {
    label: 'Text input label',
    prefix: searchIcon,
    placeholder: 'Sample input text',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Text input label',
    suffix: 'lbs.',
    placeholder: 'Sample input text',
  },
};

export const WithPrefixAndHelper: Story = {
  args: {
    label: 'Text input label',
    helperText: 'Helper text',
    prefix: searchIcon,
    placeholder: 'Sample input text',
  },
};

/* ===== Textarea ===== */

export const TextareaDefault: Story = {
  render: () => (
    <Textarea label="Text input label" placeholder="Sample input text" />
  ),
};

export const TextareaWithHelper: Story = {
  render: () => (
    <Textarea
      label="Text input label"
      helperText="Helper text"
      placeholder="Sample input text"
    />
  ),
};
