import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonVariant } from './Button';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1868-83&m=dev';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: FIGMA_URL,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent-cool',
        'accent-warm',
        'base',
        'success',
        'error',
        'inverse',
        'outline',
        'outline-inverse',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'big'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ===== Individual Variants ===== */

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Button', variant: 'secondary' },
};

export const AccentCool: Story = {
  args: { children: 'Button', variant: 'accent-cool' },
};

export const AccentWarm: Story = {
  args: { children: 'Button', variant: 'accent-warm' },
};

export const Base: Story = {
  args: { children: 'Button', variant: 'base' },
};

export const Success: Story = {
  args: { children: 'Button', variant: 'success' },
};

export const Error: Story = {
  args: { children: 'Button', variant: 'error' },
};

export const Inverse: Story = {
  args: { children: 'Button', variant: 'inverse' },
};

export const Outline: Story = {
  args: { children: 'Button', variant: 'outline' },
};

export const OutlineInverse: Story = {
  args: { children: 'Button', variant: 'outline-inverse' },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [
    (Story) => (
      <div className="rounded-md bg-base-darkest p-8">
        <Story />
      </div>
    ),
  ],
};

/* ===== Sizes ===== */

export const Big: Story = {
  args: { children: 'Big Button', size: 'big' },
};

/* ===== States ===== */

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

/* ===== Gallery ===== */

const allVariants: ButtonVariant[] = [
  'primary',
  'secondary',
  'accent-cool',
  'accent-warm',
  'base',
  'success',
  'error',
  'inverse',
  'outline',
  'outline-inverse',
];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-4 rounded-lg bg-white p-6">
      {allVariants.map((v) => (
        <div key={v} className={v.includes('inverse') ? 'rounded-md bg-base-darkest p-4' : ''}>
          <Button variant={v}>{v}</Button>
        </div>
      ))}
    </div>
  ),
};

export const AllDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-4 rounded-lg bg-white p-6">
      {allVariants.map((v) => (
        <div key={v} className={v.includes('inverse') ? 'rounded-md bg-base-darkest p-4' : ''}>
          <Button variant={v} disabled>{v}</Button>
        </div>
      ))}
    </div>
  ),
};
