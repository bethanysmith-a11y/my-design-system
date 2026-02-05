import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2282&m=dev';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
