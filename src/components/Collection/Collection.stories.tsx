import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collection } from './Collection';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-4622&m=dev';

const defaultItems = [
  {
    heading: "Gears of Government President's Award winners",
    href: '#',
    description:
      'Today, the Administration announces the winners of the Gears of Government President\'s Award.',
    date: 'January 30, 2020',
  },
  {
    heading: 'Federal student loan repayment',
    href: '#',
    description:
      'Education Department will start a new round of federal student loan repayment for the upcoming fiscal year.',
    date: 'September 30, 2020',
  },
  {
    heading: 'Grant opportunities for rural areas',
    href: '#',
    description:
      'USDA is offering new grant opportunities to support rural communities across the country.',
    date: 'February 15, 2021',
  },
];

const meta = {
  title: 'Components/Collection',
  component: Collection,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-xl"><Story /></div>],
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Recent News',
    items: defaultItems,
  },
};

export const HeadingsOnly: Story = {
  args: {
    heading: 'Recent News',
    type: 'heading-only',
    items: defaultItems,
  },
};

export const CalendarDisplay: Story = {
  args: {
    heading: 'Recent News',
    type: 'calendar',
    items: [
      {
        heading: "Gears of Government President's Award winners",
        href: '#',
        description: 'Today, the Administration announces the winners.',
        calendarDate: { month: 'JAN', day: 30 },
      },
      {
        heading: 'Federal student loan repayment',
        href: '#',
        description: 'New round of federal student loan repayment.',
        calendarDate: { month: 'SEP', day: 30 },
      },
    ],
  },
};

export const MediaThumbnail: Story = {
  args: {
    heading: 'Recent News',
    type: 'media',
    items: [
      {
        heading: "Gears of Government President's Award winners",
        href: '#',
        description: 'Today, the Administration announces the winners.',
        mediaSrc: 'https://placehold.co/64x64/e2e8f0/475569?text=IMG',
        mediaAlt: 'Placeholder image',
      },
      {
        heading: 'Federal student loan repayment',
        href: '#',
        description: 'New round of federal student loan repayment.',
        mediaSrc: 'https://placehold.co/64x64/e2e8f0/475569?text=IMG',
        mediaAlt: 'Placeholder image',
      },
    ],
  },
};
