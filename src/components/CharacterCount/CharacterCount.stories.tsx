import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterCountInput, CharacterCountTextarea } from './CharacterCount';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-3838&m=dev';

const inputMeta = {
  title: 'Components/CharacterCount/Input',
  component: CharacterCountInput,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story: React.ComponentType) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof CharacterCountInput>;

export default inputMeta;
type InputStory = StoryObj<typeof inputMeta>;

export const Default: InputStory = {
  args: {
    label: 'Text input',
    maxLength: 25,
    placeholder: 'Enter text',
  },
};

export const WithHint: InputStory = {
  args: {
    label: 'Text input',
    maxLength: 25,
    showHint: true,
    placeholder: 'Enter text',
  },
};

// Separate story file for textarea would be ideal, but we can co-locate
export const TextareaDefault: InputStory = {
  render: () => (
    <CharacterCountTextarea
      label="Textarea"
      maxLength={200}
      placeholder="Enter long form text"
    />
  ),
};

export const TextareaWithHint: InputStory = {
  render: () => (
    <CharacterCountTextarea
      label="Textarea"
      maxLength={200}
      showHint
      placeholder="Enter long form text"
    />
  ),
};
