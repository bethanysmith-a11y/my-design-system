import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginPage } from './LoginPage';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=2053-2641&m=dev';

const meta = {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
