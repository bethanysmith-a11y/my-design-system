import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Banner } from './Banner';

describe('Banner', () => {
  it('renders the official website text', () => {
    render(<Banner />);
    const texts = screen.getAllByText(/An official website of the United States government/i);
    expect(texts.length).toBeGreaterThan(0);
  });

  it('renders the US flag image', () => {
    render(<Banner />);
    const flags = screen.getAllByAltText('U.S. flag');
    expect(flags.length).toBeGreaterThan(0);
  });

  it('renders the "how you know" button', () => {
    render(<Banner />);
    const buttons = screen.getAllByText(/how you know/i);
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('toggles expanded content when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Banner />);

    const buttons = screen.getAllByText(/how you know/i);
    const button = buttons[0];
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // Expand
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByText(/Official websites use .gov/i).length).toBeGreaterThan(0);

    // Collapse
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows .gov explanation when expanded', async () => {
    const user = userEvent.setup();
    render(<Banner />);

    const buttons = screen.getAllByText(/how you know/i);
    await user.click(buttons[0]);
    expect(screen.getAllByText(/\.gov/).length).toBeGreaterThan(0);
  });

  it('accepts custom className', () => {
    const { container } = render(<Banner className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
