import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3789&m=dev';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Back</Button>
      <Button>Continue</Button>
    </ButtonGroup>
  ),
};

export const Segmented: Story = {
  render: () => (
    <ButtonGroup segmented>
      <Button>Map</Button>
      <Button variant="outline">Satellite</Button>
      <Button variant="outline">Terrain</Button>
    </ButtonGroup>
  ),
};
