import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3187&m=dev';

const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
  argTypes: { size: { control: 'select', options: ['default', 'big', 'small'] } },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Search' } };
export const Big: Story = { args: { placeholder: 'Search', size: 'big' } };
export const Small: Story = { args: { placeholder: 'Search', size: 'small' } };
