import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Search } from './Search';

describe('Search', () => {
  it('renders search input', () => {
    render(<Search placeholder="Search" />);
    const inputs = screen.getAllByPlaceholderText('Search');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders search button for default size', () => {
    render(<Search />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders search button for small size', () => {
    render(<Search size="small" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders with big size', () => {
    render(<Search size="big" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('allows user to type in search field', async () => {
    const user = userEvent.setup();
    render(<Search />);

    const inputs = screen.getAllByRole('searchbox');
    const input = inputs[0];
    await user.type(input, 'test query');
    expect(input).toHaveValue('test query');
  });

  it('has role="search" on form', () => {
    render(<Search />);
    const forms = screen.getAllByRole('search');
    expect(forms.length).toBeGreaterThan(0);
  });

  it('accepts custom className', () => {
    render(<Search className="custom-class" />);
    const forms = screen.getAllByRole('search');
    const customForm = forms.find(f => f.classList.contains('custom-class'));
    expect(customForm).toBeTruthy();
  });
});
