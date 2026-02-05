import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2372&m=dev';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="flex items-center justify-center p-20"><Story /></div>],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    label: 'This is a tooltip',
    position: 'top',
    children: <Button>Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    label: 'This is a tooltip',
    position: 'bottom',
    children: <Button>Hover me</Button>,
  },
};

export const Left: Story = {
  args: {
    label: 'This is a tooltip',
    position: 'left',
    children: <Button>Hover me</Button>,
  },
};

export const Right: Story = {
  args: {
    label: 'This is a tooltip',
    position: 'right',
    children: <Button>Hover me</Button>,
  },
};
