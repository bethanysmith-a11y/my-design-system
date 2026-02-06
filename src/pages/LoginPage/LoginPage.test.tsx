import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  describe('Unit Tests', () => {
    describe('Banner', () => {
      it('renders the government banner', () => {
        render(<LoginPage />);
        const banners = screen.getAllByText(/An official website of the United States government/i);
        expect(banners.length).toBeGreaterThan(0);
      });

      it('renders the "how you know" button', () => {
        render(<LoginPage />);
        const buttons = screen.getAllByText(/how you know/i);
        expect(buttons.length).toBeGreaterThan(0);
      });
    });

    describe('Header', () => {
      it('renders the USCIS logo', () => {
        render(<LoginPage />);
        const logos = screen.getAllByAltText(/USCIS/i);
        expect(logos.length).toBeGreaterThan(0);
      });

      it('renders Sign In link', () => {
        render(<LoginPage />);
        const signInLinks = screen.getAllByText('Sign In');
        expect(signInLinks.length).toBeGreaterThan(0);
      });

      it('renders search functionality', () => {
        render(<LoginPage />);
        const searchInputs = screen.getAllByPlaceholderText('Search');
        expect(searchInputs.length).toBeGreaterThan(0);
      });
    });

    describe('Create Account Form', () => {
      it('renders the Create account elements', () => {
        render(<LoginPage />);
        const elements = screen.getAllByText(/Create account/i);
        expect(elements.length).toBeGreaterThan(0);
      });

      it('renders form input fields', () => {
        render(<LoginPage />);
        const inputs = screen.getAllByPlaceholderText('Sample input text');
        expect(inputs.length).toBeGreaterThanOrEqual(3);
      });

      it('renders show password link', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Show password/i);
        expect(links.length).toBeGreaterThan(0);
      });

      it('renders terms of service text', () => {
        render(<LoginPage />);
        const text = screen.getAllByText(/I agree to the/i);
        expect(text.length).toBeGreaterThan(0);
      });

      it('renders Terms of Service link', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Terms of Service/i);
        expect(links.length).toBeGreaterThan(0);
      });

      it('renders Privacy Policy link', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Privacy Policy/i);
        expect(links.length).toBeGreaterThan(0);
      });

      it('renders sign in link for existing users', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Already have an account/i);
        expect(links.length).toBeGreaterThan(0);
      });
    });

    describe('Features Section', () => {
      it('renders the features heading', () => {
        render(<LoginPage />);
        const headings = screen.getAllByText(/Start Your Immigration Journey/i);
        expect(headings.length).toBeGreaterThan(0);
      });

      it('renders Track Your Application feature', () => {
        render(<LoginPage />);
        const features = screen.getAllByText(/Track Your Application/i);
        expect(features.length).toBeGreaterThan(0);
      });

      it('renders Secure Document Upload feature', () => {
        render(<LoginPage />);
        const features = screen.getAllByText(/Secure Document Upload/i);
        expect(features.length).toBeGreaterThan(0);
      });

      it('renders Faster Processing feature', () => {
        render(<LoginPage />);
        const features = screen.getAllByText(/Faster Processing/i);
        expect(features.length).toBeGreaterThan(0);
      });
    });

    describe('Federal Employee Section', () => {
      it('renders federal employee question', () => {
        render(<LoginPage />);
        const questions = screen.getAllByText(/federal employee/i);
        expect(questions.length).toBeGreaterThan(0);
      });

      it('renders SSO button', () => {
        render(<LoginPage />);
        const buttons = screen.getAllByText(/Launch secondary SSO/i);
        expect(buttons.length).toBeGreaterThan(0);
      });
    });

    describe('Footer', () => {
      it('renders return to top link', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Return to top/i);
        expect(links.length).toBeGreaterThan(0);
      });

      it('renders primary footer links', () => {
        render(<LoginPage />);
        expect(screen.getAllByText(/Topics/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Forms/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Newsroom/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Citizenship/i).length).toBeGreaterThan(0);
      });

      it('renders social media links with aria-labels', () => {
        render(<LoginPage />);
        expect(screen.getAllByLabelText('Facebook').length).toBeGreaterThan(0);
        expect(screen.getAllByLabelText('Twitter').length).toBeGreaterThan(0);
        expect(screen.getAllByLabelText('YouTube').length).toBeGreaterThan(0);
        expect(screen.getAllByLabelText('Instagram').length).toBeGreaterThan(0);
        expect(screen.getAllByLabelText('RSS').length).toBeGreaterThan(0);
      });

      it('renders Contact USCIS link', () => {
        render(<LoginPage />);
        const links = screen.getAllByText(/Contact USCIS/i);
        expect(links.length).toBeGreaterThan(0);
      });
    });

    describe('Identifier Section', () => {
      it('renders USCIS.gov text', () => {
        render(<LoginPage />);
        const texts = screen.getAllByText(/USCIS\.gov/);
        expect(texts.length).toBeGreaterThan(0);
      });

      it('renders Department of Homeland Security text', () => {
        render(<LoginPage />);
        const texts = screen.getAllByText(/Department of Homeland Security/i);
        expect(texts.length).toBeGreaterThan(0);
      });

      it('renders identifier links', () => {
        render(<LoginPage />);
        expect(screen.getAllByText(/About USCIS/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Accessibility/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Freedom of Information Act/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/USA\.gov/).length).toBeGreaterThan(0);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Form Interactions', () => {
      it('allows user to type in email field', async () => {
        const user = userEvent.setup();
        render(<LoginPage />);

        const inputs = screen.getAllByPlaceholderText('Sample input text');
        const emailInput = inputs[0];

        await user.type(emailInput, 'test@example.com');
        expect(emailInput).toHaveValue('test@example.com');
      });

      it('allows user to type in password field', async () => {
        const user = userEvent.setup();
        render(<LoginPage />);

        const inputs = screen.getAllByPlaceholderText('Sample input text');
        const passwordInput = inputs[1];

        await user.type(passwordInput, 'secretpassword');
        expect(passwordInput).toHaveValue('secretpassword');
      });

      it('allows user to toggle the terms checkbox', async () => {
        const user = userEvent.setup();
        render(<LoginPage />);

        const checkboxes = screen.getAllByRole('checkbox');
        const checkbox = checkboxes[0];
        expect(checkbox).not.toBeChecked();

        await user.click(checkbox);
        expect(checkbox).toBeChecked();

        await user.click(checkbox);
        expect(checkbox).not.toBeChecked();
      });
    });

    describe('Navigation', () => {
      it('Terms of Service links have href', () => {
        render(<LoginPage />);
        const tosLinks = screen.getAllByText(/Terms of Service/i);
        tosLinks.forEach(link => {
          const anchor = link.closest('a');
          if (anchor) {
            expect(anchor).toHaveAttribute('href', '#');
          }
        });
      });

      it('Privacy Policy links have href', () => {
        render(<LoginPage />);
        const privacyLinks = screen.getAllByText(/Privacy Policy/i);
        privacyLinks.forEach(link => {
          const anchor = link.closest('a');
          if (anchor) {
            expect(anchor).toHaveAttribute('href', '#');
          }
        });
      });

      it('return to top links point to #top', () => {
        render(<LoginPage />);
        const returnToTopLinks = screen.getAllByText(/Return to top/i);
        returnToTopLinks.forEach(link => {
          const anchor = link.closest('a');
          if (anchor) {
            expect(anchor).toHaveAttribute('href', '#top');
          }
        });
      });
    });

    describe('Accessibility', () => {
      it('has alt text for all images', () => {
        render(<LoginPage />);
        const images = screen.getAllByRole('img');
        images.forEach((img) => {
          expect(img).toHaveAttribute('alt');
          expect(img.getAttribute('alt')).not.toBe('');
        });
      });

      it('has checkbox for terms agreement', () => {
        render(<LoginPage />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes.length).toBeGreaterThan(0);
      });
    });

    describe('Search Functionality', () => {
      it('allows user to type in search field', async () => {
        const user = userEvent.setup();
        render(<LoginPage />);

        const searchInputs = screen.getAllByPlaceholderText('Search');
        const searchInput = searchInputs[0];

        await user.type(searchInput, 'immigration');
        expect(searchInput).toHaveValue('immigration');
      });
    });
  });

  describe('Props', () => {
    it('uses default logoSrc when not provided', () => {
      render(<LoginPage />);
      const logos = screen.getAllByRole('img');
      const uscisLogos = logos.filter(img =>
        img.getAttribute('alt')?.includes('USCIS') &&
        !img.getAttribute('alt')?.includes('Department of Homeland Security')
      );

      expect(uscisLogos.length).toBeGreaterThan(0);
      uscisLogos.forEach(logo => {
        expect(logo).toHaveAttribute('src', '/uscis-logo.png');
      });
    });

    it('accepts custom className prop', () => {
      const { container } = render(<LoginPage className="custom-class" />);
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});
