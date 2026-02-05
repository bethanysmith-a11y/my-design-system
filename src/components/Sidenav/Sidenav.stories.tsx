import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidenav } from './Sidenav';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2464&m=dev';

const sampleItems = [
  {
    label: 'Current page',
    href: '#',
    current: true,
    children: [
      { label: 'Child link', href: '#' },
      {
        label: 'Child link',
        href: '#',
        children: [
          { label: 'Grandchild link', href: '#' },
          { label: 'Grandchild link', href: '#' },
        ],
      },
      { label: 'Child link', href: '#' },
    ],
  },
  { label: 'Parent link', href: '#' },
  { label: 'Parent link', href: '#' },
];

const meta = {
  title: 'Components/Sidenav',
  component: Sidenav,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
} satisfies Meta<typeof Sidenav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const FlatList: Story = {
  args: {
    items: [
      { label: 'Section one', href: '#', current: true },
      { label: 'Section two', href: '#' },
      { label: 'Section three', href: '#' },
      { label: 'Section four', href: '#' },
    ],
  },
};
