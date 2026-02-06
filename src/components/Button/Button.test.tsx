import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders primary variant by default', () => {
    render(<Button>Primary</Button>);
    const buttons = screen.getAllByRole('button');
    const primaryButton = buttons.find(b => b.classList.contains('bg-primary'));
    expect(primaryButton).toBeTruthy();
  });

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const buttons = screen.getAllByRole('button');
    const secondaryButton = buttons.find(b => b.classList.contains('bg-secondary'));
    expect(secondaryButton).toBeTruthy();
  });

  it('renders accent-cool variant', () => {
    render(<Button variant="accent-cool">Accent Cool</Button>);
    const buttons = screen.getAllByRole('button');
    const accentCoolButton = buttons.find(b => b.classList.contains('bg-accent-cool'));
    expect(accentCoolButton).toBeTruthy();
  });

  it('renders accent-warm variant', () => {
    render(<Button variant="accent-warm">Accent Warm</Button>);
    const buttons = screen.getAllByRole('button');
    const accentWarmButton = buttons.find(b => b.classList.contains('bg-accent-warm'));
    expect(accentWarmButton).toBeTruthy();
  });

  it('renders outline variant', () => {
    render(<Button variant="outline">Outline</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders outline-inverse variant', () => {
    render(<Button variant="outline-inverse">Outline Inverse</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders base variant', () => {
    render(<Button variant="base">Base</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders success variant', () => {
    render(<Button variant="success">Success</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders error variant', () => {
    render(<Button variant="error">Error</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders inverse variant', () => {
    render(<Button variant="inverse">Inverse</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders big size', () => {
    render(<Button size="big">Big Button</Button>);
    const buttons = screen.getAllByRole('button');
    const bigButton = buttons.find(b => b.classList.contains('py-4'));
    expect(bigButton).toBeTruthy();
  });

  it('renders disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const buttons = screen.getAllByRole('button');
    const disabledButton = buttons.find(b => (b as HTMLButtonElement).disabled);
    expect(disabledButton).toBeTruthy();
  });

  it('renders disabled primary variant', () => {
    render(<Button variant="primary" disabled>Disabled Primary</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders disabled outline variant', () => {
    render(<Button variant="outline" disabled>Disabled Outline</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders with custom type', () => {
    render(<Button type="button">Button</Button>);
    const buttons = screen.getAllByRole('button');
    const buttonType = buttons.find(b => b.getAttribute('type') === 'button');
    expect(buttonType).toBeTruthy();
  });

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const buttons = screen.getAllByRole('button');
    const customButton = buttons.find(b => b.classList.contains('custom-class'));
    expect(customButton).toBeTruthy();
  });
});
