import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2033&m=dev';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModalDemo({ size, forcedAction }: { size?: 'default' | 'lg'; forcedAction?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        heading="Are you sure you want to continue?"
        size={size}
        forcedAction={forcedAction}
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Continue</Button>
            {!forcedAction && (
              <Button variant="outline" onClick={() => setOpen(false)}>
                Go back
              </Button>
            )}
          </>
        }
      >
        <p>
          You have unsaved changes that will be lost if you continue without saving.
        </p>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Large: Story = {
  render: () => <ModalDemo size="lg" />,
};

export const ForcedAction: Story = {
  render: () => <ModalDemo forcedAction />,
};
