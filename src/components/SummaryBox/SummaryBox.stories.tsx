import type { Meta, StoryObj } from '@storybook/react-vite';
import { SummaryBox } from './SummaryBox';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-4238&m=dev';

const meta = {
  title: 'Components/SummaryBox',
  component: SummaryBox,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof SummaryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Key information',
    children: (
      <ul className="list-disc space-y-1 pl-5">
        <li>If you are under a winter storm warning, find shelter right away.</li>
        <li>Sign up for your community&rsquo;s warning system.</li>
        <li>Learn the signs of, and basic treatments for, frostbite and hypothermia.</li>
        <li>Gather emergency supplies for your home and your car.</li>
      </ul>
    ),
  },
};
