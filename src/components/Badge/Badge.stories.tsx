import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, type BadgeVariant, type BadgeSize } from './Badge';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2305&m=dev';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['default', 'big'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'TAG' },
};

export const Big: Story = {
  args: { children: 'TAG', size: 'big' },
};

export const Info: Story = {
  args: { children: 'Info', variant: 'info' },
};

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
};

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
};

export const Error: Story = {
  args: { children: 'Error', variant: 'error' },
};

const allVariants: BadgeVariant[] = ['default', 'info', 'success', 'warning', 'error'];
const allSizes: BadgeSize[] = ['default', 'big'];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {allSizes.map((s) => (
        <div key={s} className="flex flex-wrap items-center gap-2">
          {allVariants.map((v) => (
            <Badge key={`${s}-${v}`} size={s} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
