import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepIndicator } from './StepIndicator';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3022&m=dev';

const sampleSteps = [
  { label: 'Personal information' },
  { label: 'Household status' },
  { label: 'Supporting documents' },
  { label: 'Signature' },
  { label: 'Review and submit' },
];

const meta = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-2xl"><Story /></div>],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
  },
};

export const NoLabels: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    variant: 'no-labels',
  },
};

export const Centered: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    variant: 'centered',
  },
};

export const Counters: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    variant: 'counters',
  },
};

export const SmallCounters: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    variant: 'counters-small',
  },
};
