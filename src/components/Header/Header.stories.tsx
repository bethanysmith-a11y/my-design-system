import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { Search } from '../Search/Search';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2114&m=dev';

const sampleLinks = [
  {
    label: 'Current section',
    href: '#',
    current: true,
    children: [
      { label: 'Navigation link', href: '#' },
      { label: 'Navigation link', href: '#' },
      { label: 'Navigation link', href: '#' },
    ],
  },
  {
    label: 'Section',
    href: '#',
    children: [
      { label: 'Navigation link', href: '#' },
      { label: 'Navigation link', href: '#' },
    ],
  },
  { label: 'Simple link', href: '#' },
];

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Project title',
    navLinks: sampleLinks,
  },
};

export const Extended: Story = {
  args: {
    title: 'Project title',
    navLinks: sampleLinks,
    extended: true,
    secondaryContent: <Search size="small" placeholder="Search" />,
  },
};

export const WithLogo: Story = {
  args: {
    title: 'Project title',
    logo: (
      <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    navLinks: sampleLinks,
  },
};
