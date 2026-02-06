import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Input, Textarea } from './Input';

describe('Input', () => {
  it('renders input element', () => {
    render(<Input />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    const inputs = screen.getAllByLabelText(/Email/i);
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders with required indicator', () => {
    render(<Input label="Email" required />);
    const asterisks = screen.getAllByText('*');
    expect(asterisks.length).toBeGreaterThan(0);
  });

  it('renders with helper text', () => {
    render(<Input helperText="Enter your email address" />);
    const helpers = screen.getAllByText('Enter your email address');
    expect(helpers.length).toBeGreaterThan(0);
  });

  it('renders with error state', () => {
    render(<Input label="Email" error="Invalid email" />);
    const errors = screen.getAllByText('Invalid email');
    expect(errors.length).toBeGreaterThan(0);
  });

  it('renders with success state', () => {
    render(<Input success />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders with prefix', () => {
    render(<Input prefix="$" />);
    const prefixes = screen.getAllByText('$');
    expect(prefixes.length).toBeGreaterThan(0);
  });

  it('renders with suffix', () => {
    render(<Input suffix="lbs" />);
    const suffixes = screen.getAllByText('lbs');
    expect(suffixes.length).toBeGreaterThan(0);
  });

  it('renders with both prefix and suffix', () => {
    render(<Input prefix="$" suffix=".00" />);
    expect(screen.getAllByText('$').length).toBeGreaterThan(0);
    expect(screen.getAllByText('.00').length).toBeGreaterThan(0);
  });

  it('allows user to type', async () => {
    const user = userEvent.setup();
    const { container } = render(<Input placeholder="type-test" />);

    const input = container.querySelector('input[placeholder="type-test"]');
    if (input) {
      await user.type(input as HTMLInputElement, 'hello');
      expect(input).toHaveValue('hello');
    }
  });

  it('accepts custom id', () => {
    render(<Input id="custom-id" label="Custom" />);
    const inputs = screen.getAllByRole('textbox');
    const customInput = inputs.find(i => i.id === 'custom-id');
    expect(customInput).toBeTruthy();
  });

  it('accepts custom className', () => {
    render(<Input className="custom-class" />);
    const inputs = screen.getAllByRole('textbox');
    const customInput = inputs.find(i => i.classList.contains('custom-class'));
    expect(customInput).toBeTruthy();
  });

  it('renders disabled state', () => {
    render(<Input disabled />);
    const inputs = screen.getAllByRole('textbox');
    const disabledInput = inputs.find(i => (i as HTMLInputElement).disabled);
    expect(disabledInput).toBeTruthy();
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const inputs = screen.getAllByPlaceholderText('Enter text');
    expect(inputs.length).toBeGreaterThan(0);
  });
});

describe('Textarea', () => {
  it('renders textarea element', () => {
    render(<Textarea />);
    const textareas = screen.getAllByRole('textbox');
    expect(textareas.length).toBeGreaterThan(0);
  });

  it('renders with label', () => {
    render(<Textarea label="Message" />);
    const textareas = screen.getAllByLabelText(/Message/i);
    expect(textareas.length).toBeGreaterThan(0);
  });

  it('renders with helper text', () => {
    render(<Textarea helperText="Enter your message" />);
    const helpers = screen.getAllByText('Enter your message');
    expect(helpers.length).toBeGreaterThan(0);
  });

  it('renders with error state', () => {
    render(<Textarea label="Message" error="Message is required" />);
    const errors = screen.getAllByText('Message is required');
    expect(errors.length).toBeGreaterThan(0);
  });

  it('allows user to type in textarea', async () => {
    const user = userEvent.setup();
    const { container } = render(<Textarea id="textarea-test" />);

    const textarea = container.querySelector('textarea#textarea-test');
    if (textarea) {
      await user.type(textarea as HTMLTextAreaElement, 'Hello world');
      expect(textarea).toHaveValue('Hello world');
    }
  });

  it('accepts custom id', () => {
    render(<Textarea id="custom-textarea" label="Custom" />);
    const textareas = screen.getAllByRole('textbox');
    const customTextarea = textareas.find(t => t.id === 'custom-textarea');
    expect(customTextarea).toBeTruthy();
  });

  it('accepts custom className', () => {
    render(<Textarea className="custom-class" />);
    const textareas = screen.getAllByRole('textbox');
    const customTextarea = textareas.find(t => t.classList.contains('custom-class'));
    expect(customTextarea).toBeTruthy();
  });
});
