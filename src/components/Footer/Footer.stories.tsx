import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-246&m=dev';

const flatLinks = [
  { label: 'Link one', href: '#' },
  { label: 'Link two', href: '#' },
  { label: 'Link three', href: '#' },
  { label: 'Link four', href: '#' },
];

const bigColumns = [
  {
    heading: 'Topic',
    links: [
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
    ],
  },
  {
    heading: 'Topic',
    links: [
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
    ],
  },
  {
    heading: 'Topic',
    links: [
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
    ],
  },
  {
    heading: 'Topic',
    links: [
      { label: 'Subtopic', href: '#' },
      { label: 'Subtopic', href: '#' },
    ],
  },
];

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slim: Story = {
  args: {
    size: 'slim',
    links: flatLinks,
    agencyName: 'Agency name',
    phone: '(555) 555-5555',
    email: 'info@agency.gov',
    returnToTop: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    links: flatLinks,
    agencyName: 'Agency name',
    phone: '(555) 555-5555',
    email: 'info@agency.gov',
    returnToTop: true,
  },
};

export const Big: Story = {
  args: {
    size: 'big',
    columns: bigColumns,
    agencyName: 'Agency name',
    phone: '(555) 555-5555',
    email: 'info@agency.gov',
    returnToTop: true,
    logo: (
      <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
};
