import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography, type TypographyVariant } from './Typography';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=63-49&m=dev';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'body', 'small',
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: 'display', children: 'Display heading' },
};

export const Heading1: Story = {
  args: { variant: 'h1', children: 'h1: Great Smoky Mountains' },
};

export const Heading2: Story = {
  args: { variant: 'h2', children: 'h2: Section heading' },
};

export const Heading3: Story = {
  args: { variant: 'h3', children: 'h3: Subsection heading' },
};

export const Heading4: Story = {
  args: { variant: 'h4', children: 'h4: Subsection heading' },
};

export const Heading5: Story = {
  args: { variant: 'h5', children: 'h5: Subsection heading' },
};

export const Heading6: Story = {
  args: { variant: 'h6', children: 'H6: Subsection heading' },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children:
      'Great Smoky Mountains National Park straddles the border of North Carolina and Tennessee.',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children:
      'The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. Streams, rivers and waterfalls appear along hiking routes that include a segment of the Appalachian Trail.',
  },
};

export const Small: Story = {
  args: { variant: 'small', children: 'This is small/caption text.' },
};

const allVariants: TypographyVariant[] = [
  'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'body', 'small',
];

export const FullScale: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-4">
      {allVariants.map((v) => (
        <Typography key={v} variant={v}>
          {v}: The quick brown fox jumps over the lazy dog
        </Typography>
      ))}
    </div>
  ),
};
