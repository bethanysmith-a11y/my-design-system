import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteAlert } from './SiteAlert';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-4247&m=dev';

const meta = {
  title: 'Components/SiteAlert',
  component: SiteAlert,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof SiteAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoDefault: Story = {
  args: {
    type: 'info',
    heading: 'Short alert message',
    children: <p>Additional context and details about the informational site alert.</p>,
  },
};

export const EmergencyDefault: Story = {
  args: {
    type: 'emergency',
    heading: 'Emergency alert message',
    children: <p>Additional context and details about the emergency alert.</p>,
  },
};

export const InfoWithList: Story = {
  args: {
    type: 'info',
    style: 'list',
    heading: 'Short alert message',
    children: (
      <ul className="list-disc space-y-1 pl-5">
        <li>The first item in the list.</li>
        <li>The second item in the list.</li>
        <li>The third item in the list.</li>
      </ul>
    ),
  },
};

export const EmergencyWithList: Story = {
  args: {
    type: 'emergency',
    style: 'list',
    heading: 'Emergency alert message',
    children: (
      <ul className="list-disc space-y-1 pl-5">
        <li>The first item in the list.</li>
        <li>The second item in the list.</li>
      </ul>
    ),
  },
};

export const SlimInfo: Story = {
  args: {
    type: 'info',
    style: 'slim',
    children: <p>Short informational message.</p>,
  },
};

export const SlimEmergency: Story = {
  args: {
    type: 'emergency',
    style: 'slim',
    children: <p>Short emergency message.</p>,
  },
};

export const NoIcon: Story = {
  args: {
    type: 'info',
    style: 'no-icon',
    heading: 'Alert without icon',
    children: <p>Additional context and details about the site alert.</p>,
  },
};
