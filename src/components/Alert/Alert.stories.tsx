import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, type AlertType } from './Alert';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1879-1235&m=dev';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    slim: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    heading: 'Info status',
    children: 'This is a succinct, helpful message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    heading: 'Success status',
    children: 'This is a succinct, helpful message.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    heading: 'Warning status',
    children: 'This is a succinct, helpful message.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    heading: 'Error status',
    children: 'This is a succinct, helpful message.',
  },
};

export const SlimInfo: Story = {
  args: {
    type: 'info',
    slim: true,
    children: "You'll need to change your password by April 25, 2020.",
  },
};

export const SlimSuccess: Story = {
  args: {
    type: 'success',
    slim: true,
    children: 'You successfully changed your password.',
  },
};

export const SlimWarning: Story = {
  args: {
    type: 'warning',
    slim: true,
    children: "You'll need to change your password in the next 48 hours.",
  },
};

export const SlimError: Story = {
  args: {
    type: 'error',
    slim: true,
    children: 'Sorry, a password needs more than four characters.',
  },
};

const allTypes: AlertType[] = ['info', 'success', 'warning', 'error'];

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-4">
      {allTypes.map((t) => (
        <Alert key={t} type={t} heading={`${t.charAt(0).toUpperCase() + t.slice(1)} status`}>
          This is a succinct, helpful message.
        </Alert>
      ))}
      {allTypes.map((t) => (
        <Alert key={`${t}-slim`} type={t} slim>
          Slim {t} alert message.
        </Alert>
      ))}
    </div>
  ),
};
