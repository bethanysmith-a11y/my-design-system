import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button/Button';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-5111&m=dev';

const placeholder = (
  <div className="flex h-40 items-center justify-center bg-base-lightest text-base">
    Placeholder image
  </div>
);

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['default', 'media-first', 'title-first', 'inset', 'flag-left', 'flag-right'],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card title',
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.',
    footer: <Button>Button</Button>,
  },
};

export const MediaFirst: Story = {
  args: {
    title: 'Card title',
    layout: 'media-first',
    media: placeholder,
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres.',
    footer: <Button>Button</Button>,
  },
};

export const TitleFirst: Story = {
  args: {
    title: 'Card title',
    layout: 'title-first',
    media: placeholder,
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres.',
    footer: <Button>Button</Button>,
  },
};

export const Inset: Story = {
  args: {
    title: 'Card title',
    layout: 'inset',
    media: placeholder,
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres.',
    footer: <Button>Button</Button>,
  },
};

export const FlagLeft: Story = {
  args: {
    title: 'Card title',
    layout: 'flag-left',
    media: placeholder,
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled.',
    footer: <Button>Button</Button>,
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const FlagRight: Story = {
  args: {
    title: 'Card title',
    layout: 'flag-right',
    media: placeholder,
    children:
      'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled.',
    footer: <Button>Button</Button>,
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const NoFooter: Story = {
  args: {
    title: 'Card title',
    children: 'A card without a footer action.',
  },
};

export const ContentOnly: Story = {
  args: {
    children: 'A card with no title, no media, and no footer — just content.',
  },
};
