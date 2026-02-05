import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3816&m=dev';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'States', href: '#' },
      { label: 'Massachusetts', href: '#' },
      { label: 'North Adams' },
    ],
  },
};

export const ParentOnly: Story = {
  args: {
    items: [
      { label: 'Massachusetts', href: '#' },
      { label: 'North Adams' },
    ],
  },
};
