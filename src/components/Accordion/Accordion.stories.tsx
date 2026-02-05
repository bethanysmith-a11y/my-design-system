import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1890-62&m=dev';

const sampleItems = [
  { id: '1', heading: 'First Amendment', content: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof.' },
  { id: '2', heading: 'Second Amendment', content: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.' },
  { id: '3', heading: 'Third Amendment', content: 'No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.' },
];

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-xl"><Story /></div>],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { items: sampleItems } };
export const Bordered: Story = { args: { items: sampleItems, bordered: true } };
export const Multiselect: Story = { args: { items: sampleItems, multiselect: true } };
