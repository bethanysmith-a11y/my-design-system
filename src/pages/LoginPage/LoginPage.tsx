import { Banner } from '../../components/Banner/Banner';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Search } from '../../components/Search/Search';

/**
 * Login Page — Figma frame 2053:2641
 *
 * USWDS components used from library:
 *   - Banner (gov banner)
 *   - Input (text-input for email/password)
 *   - Button (primary + outline variants)
 *   - Search (header search)
 *
 * Page-specific elements (custom per Figma):
 *   - Header with USCIS logo and Sign In only
 *   - Checkbox (inline)
 *   - Feature list with USWDS icons
 *   - Footer with USCIS logo and social icons
 *   - Identifier section
 */

// USWDS Icons from Figma

// Folder/document icon for "Track Your Application"
function TrackIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM14 16H6V14H14V16ZM18 12H6V10H18V12Z" />
    </svg>
  );
}

// Shield icon for "Secure Document Upload"
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.625L3 6.625V12.625C3 18.175 6.84 23.365 12 24.625C17.16 23.365 21 18.175 21 12.625V6.625L12 2.625Z" />
    </svg>
  );
}

// Clock/timer icon for "Faster Processing"
function ClockIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 5.97L17.4 2.11L16.11 3.64L20.71 7.5L22 5.97ZM7.88 3.64L6.6 2.11L2 5.96L3.29 7.49L7.88 3.64ZM12.5 8.25H11V14.25L15.75 17.1L16.5 15.87L12.5 13.5V8.25ZM12 4.25C7.03 4.25 3 8.28 3 13.25C3 18.22 7.02 22.25 12 22.25C16.97 22.25 21 18.22 21 13.25C21 8.28 16.97 4.25 12 4.25ZM12 20.25C8.13 20.25 5 17.12 5 13.25C5 9.38 8.13 6.25 12 6.25C15.87 6.25 19 9.38 19 13.25C19 17.12 15.87 20.25 12 20.25Z" />
    </svg>
  );
}

// Social media icons from Figma
function FacebookIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 34 34" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.3333 16.6667C33.3333 7.46667 25.8667 0 16.6667 0C7.46667 0 0 7.46667 0 16.6667C0 24.7333 5.73333 31.45 13.3333 33V21.6667H10V16.6667H13.3333V12.5C13.3333 9.28333 15.95 6.66667 19.1667 6.66667H23.3333V11.6667H20C19.0833 11.6667 18.3333 12.4167 18.3333 13.3333V16.6667H23.3333V21.6667H18.3333V33.25C26.75 32.4167 33.3333 25.3167 33.3333 16.6667Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 34 34" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.667 0C21.087 0 25.326 1.75595 28.452 4.88155C31.577 8.00716 33.333 12.2464 33.333 16.6667C33.333 25.8714 25.871 33.3333 16.667 33.3333C7.462 33.3333 0 25.8714 0 16.6667C0 7.46192 7.462 0 16.667 0ZM17.972 9.60687L16.667 9.61667C14.055 9.56755 11.444 9.69562 8.85 10C7.973 10.2369 7.296 10.9336 7.083 11.8167C6.796 13.4171 6.656 15.0406 6.667 16.6667C6.653 18.3094 6.793 19.9498 7.083 21.5667C7.312 22.4305 7.986 23.1051 8.85 23.3333C11.443 23.6544 14.054 23.7992 16.667 23.7667C19.279 23.7992 21.891 23.6544 24.483 23.3333C25.36 23.0964 26.038 22.3997 26.25 21.5167C26.538 19.9162 26.677 18.2927 26.667 16.6667C26.68 15.0239 26.541 13.3835 26.25 11.7667C26.022 10.9029 25.347 10.2282 24.483 10C21.889 9.69562 19.278 9.56755 16.667 9.61667L17.972 9.60687ZM14.617 13.7L19.85 16.6667L14.617 19.6333V13.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 34 34" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.667 0C21.087 0 25.326 1.75595 28.452 4.88155C31.577 8.00716 33.333 12.2464 33.333 16.6667C33.333 25.8714 25.871 33.3333 16.667 33.3333C7.462 33.3333 0 25.8714 0 16.6667C0 7.46192 7.462 0 16.667 0ZM21.15 6.66667H12.183C9.14 6.67582 6.676 9.14036 6.667 12.1833V21.15C6.676 24.193 9.14 26.6575 12.183 26.6667H21.15C24.193 26.6575 26.658 24.193 26.667 21.15V12.1833C26.658 9.14036 24.193 6.67582 21.15 6.66667ZM21.15 8.43333C23.221 8.43333 24.9 10.1123 24.9 12.1833V21.15L24.891 21.4067C24.759 23.3581 23.135 24.9 21.15 24.9H12.183C10.112 24.9 8.433 23.2211 8.433 21.15V12.1833C8.433 10.1123 10.112 8.43333 12.183 8.43333H21.15ZM16.667 11.5167C13.822 11.5167 11.517 13.8224 11.517 16.6667C11.517 19.5109 13.822 21.8167 16.667 21.8167C18.033 21.8167 19.342 21.2741 20.308 20.3083C21.274 19.3425 21.817 18.0325 21.817 16.6667C21.817 13.8224 19.511 11.5167 16.667 11.5167ZM16.667 13.3333C18.508 13.3333 20 14.8257 20 16.6667C20 18.5076 18.508 20 16.667 20C14.826 20 13.333 18.5076 13.333 16.6667C13.333 14.8257 14.826 13.3333 16.667 13.3333ZM22.033 10C21.691 10.0082 21.363 10.1451 21.117 10.3833C20.869 10.6276 20.73 10.9607 20.73 11.3083C20.73 11.6559 20.869 11.9891 21.117 12.2333C21.364 12.4702 21.691 12.6068 22.033 12.6167C22.377 12.6135 22.706 12.4759 22.95 12.2333V12.2167C23.32 11.845 23.43 11.2876 23.23 10.8032C23.029 10.3188 22.558 10.0021 22.033 10Z" />
    </svg>
  );
}

function RssIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 27 27" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0673828C14.317 0.0673828 25.934 11.684 25.934 26.0007H21.217C21.217 14.284 11.717 4.78405 0 4.78405V0.0673828ZM0 9.50072C9.117 9.50072 16.5 16.884 16.5 26.0007H11.784C11.784 19.5007 6.5 14.2174 0 14.2174V9.50072ZM3.634 18.7341C5.64 18.7341 7.267 20.3607 7.267 22.3674C7.267 24.374 5.64 26.0007 3.634 26.0007C1.627 26.0007 0 24.374 0 22.3674C0 20.3607 1.627 18.7341 3.634 18.7341Z" />
    </svg>
  );
}

// Checkbox component
function Checkbox({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-6 w-6 shrink-0 cursor-pointer border-2 border-base-dark bg-white accent-primary"
      />
      <span className="text-base text-base-darkest">{children}</span>
    </label>
  );
}

// Feature item with icon circle
function FeatureItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-primary">
        {icon}
      </div>
      <p className="text-base text-base-lightest">{children}</p>
    </div>
  );
}

// Social link button
function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-sm bg-black text-white hover:bg-base-darker"
    >
      {icon}
    </a>
  );
}

// Identifier section (gov footer bottom band)
function Identifier({ dhsSealSrc = '/dhs-seal.svg' }: { dhsSealSrc?: string }) {
  return (
    <div className="bg-primary-darker px-8 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header with DHS seal */}
        <div className="flex items-center gap-4 border-b border-primary pb-6">
          <img
            src={dhsSealSrc}
            alt="U.S. Department of Homeland Security seal"
            className="h-16 w-16 shrink-0"
          />
          <div>
            <p className="text-base text-base-light">USCIS.gov</p>
            <p className="font-bold">
              An official website of the{' '}
              <a href="#" className="underline hover:text-base-lightest">
                U.S. Department of Homeland Security
              </a>
            </p>
          </div>
        </div>

        {/* 3-column link grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-3 text-base sm:grid-cols-3">
          {/* Column 1 */}
          <div className="space-y-3">
            <a href="#" className="block text-base-light underline hover:text-white">About USCIS</a>
            <a href="#" className="block text-base-light underline hover:text-white">Accessibility</a>
            <a href="#" className="block text-base-light underline hover:text-white">Budget and Performance</a>
            <a href="#" className="block text-base-light underline hover:text-white">DHS Components</a>
          </div>
          {/* Column 2 */}
          <div className="space-y-3">
            <a href="#" className="block text-base-light underline hover:text-white">Freedom of Information Act</a>
            <a href="#" className="block text-base-light underline hover:text-white">No FEAR Act Data</a>
            <a href="#" className="block text-base-light underline hover:text-white">Privacy and Legal Disclaimers</a>
            <a href="#" className="block text-base-light underline hover:text-white">Site Map</a>
          </div>
          {/* Column 3 */}
          <div className="space-y-3">
            <a href="#" className="block text-base-light underline hover:text-white">Office of the Inspector General</a>
            <a href="#" className="block text-base-light underline hover:text-white">The White House</a>
            <a href="#" className="block text-base-light underline hover:text-white">USA.gov</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface LoginPageProps {
  /** URL to USCIS logo image */
  logoSrc?: string;
  className?: string;
}

export function LoginPage({
  logoSrc = '/uscis-logo.png',
  className = ''
}: LoginPageProps) {
  return (
    <div className={`min-h-screen bg-white font-sans ${className}`}>
      {/* Gov Banner */}
      <Banner />

      {/* Header - Custom with USCIS logo and Sign In only on right */}
      <header className="border-b border-base-lighter bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-4">
          {/* Left: USCIS Logo */}
          <a href="/" className="block">
            <img
              src={logoSrc}
              alt="USCIS - U.S. Citizenship and Immigration Services"
              className="h-12 w-auto"
            />
          </a>

          {/* Right: Sign In button only */}
          <div className="flex items-center gap-4">
            <Search size="small" placeholder="Search" className="hidden sm:flex" />
            <a
              href="#"
              className="flex items-center gap-1 text-heading-2xs font-bold text-primary hover:text-primary-dark"
            >
              Sign In
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-primary-darkest">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-8 py-12 lg:flex-row lg:gap-16">
          {/* Left: Create Account Form */}
          <div className="lg:w-1/2">
            <div className="rounded-sm bg-white p-8">
              <h1 className="text-heading-xl font-bold text-base-darkest">Create account</h1>
              <p className="mt-1 text-base text-base-darkest">Get started with an account.</p>

              <p className="mt-6 text-base text-base-darkest">
                <span className="text-error">*</span> indicates a required field.
              </p>

              <form className="mt-6 space-y-6">
                <Input
                  label="Email address"
                  required
                  placeholder="Sample input text"
                />

                <div>
                  <Input
                    label="Password"
                    type="password"
                    required
                    placeholder="Sample input text"
                  />
                  <a href="#" className="mt-1 inline-block text-base text-primary underline hover:text-primary-dark">
                    Show password
                  </a>
                </div>

                <Input
                  label="Re-type password"
                  type="password"
                  required
                  placeholder="Sample input text"
                />

                <Checkbox>
                  I agree to the{' '}
                  <a href="#" className="text-primary underline hover:text-primary-dark">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary underline hover:text-primary-dark">
                    Privacy Policy
                  </a>
                </Checkbox>

                <Button variant="primary">Create account</Button>
              </form>
            </div>

            <p className="mt-4 text-base text-white">
              Already have an account?{' '}
              <a href="#" className="font-bold text-white underline">
                Sign in.
              </a>
            </p>
          </div>

          {/* Right: Features & SSO */}
          <div className="lg:w-1/2">
            <h2 className="text-heading-lg font-bold text-base-lightest">
              Start Your Immigration Journey Today
            </h2>
            <p className="mt-2 text-base text-base-lightest">
              Creating an account gives you access to a faster, more secure way to manage your
              immigration applications. Here's what you can expect when you register:
            </p>

            <div className="mt-8 space-y-6">
              <FeatureItem icon={<TrackIcon />}>
                <strong>Track Your Application:</strong> Monitor your case status in real-time and receive instant updates on your immigration application progress.
              </FeatureItem>
              <FeatureItem icon={<ShieldIcon />}>
                <strong>Secure Document Upload:</strong> Safely upload and manage all required documents through our encrypted portal with peace of mind.
              </FeatureItem>
              <FeatureItem icon={<ClockIcon />}>
                <strong>Faster Processing:</strong> E-filing can significantly reduce processing times compared to paper applications.
              </FeatureItem>
            </div>

            <hr className="my-8 border-base-dark" />

            <h2 className="text-heading-lg font-bold text-base-lightest">
              Are you a federal employee?
            </h2>
            <p className="mt-2 text-base text-base-lightest">
              If you are a federal employee or other secondary user, please use secondary Single
              Sign On (SSO).
            </p>

            <Button variant="outline-inverse" className="mt-4">
              Launch secondary SSO
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        {/* Return to top - LEFT aligned */}
        <div className="border-b border-base-lighter">
          <div className="mx-auto max-w-5xl px-8 py-4">
            <a href="#top" className="text-base text-primary hover:text-primary-dark">
              Return to top
            </a>
          </div>
        </div>

        {/* Primary links */}
        <div className="bg-base-lightest">
          <div className="mx-auto flex max-w-5xl gap-8 px-8 py-4">
            <a href="#" className="text-base font-bold text-base-darkest hover:text-primary">Topics</a>
            <a href="#" className="text-base font-bold text-base-darkest hover:text-primary">Forms</a>
            <a href="#" className="text-base font-bold text-base-darkest hover:text-primary">Newsroom</a>
            <a href="#" className="text-base font-bold text-base-darkest hover:text-primary">Citizenship</a>
          </div>
        </div>

        {/* Secondary section with logo, contact, socials */}
        <div className="bg-base-lighter">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Logo */}
            <img
              src={logoSrc}
              alt="USCIS"
              className="h-16 w-auto"
            />

            {/* Contact & Social */}
            <div className="flex flex-col items-start gap-4 sm:items-end">
              {/* Social icons */}
              <div className="flex gap-2">
                <SocialLink href="#" label="Facebook" icon={<FacebookIcon />} />
                <SocialLink href="#" label="Twitter" icon={<TwitterIcon />} />
                <SocialLink href="#" label="YouTube" icon={<YouTubeIcon />} />
                <SocialLink href="#" label="Instagram" icon={<InstagramIcon />} />
                <SocialLink href="#" label="RSS" icon={<RssIcon />} />
              </div>

              {/* Contact link */}
              <a href="#" className="text-heading-lg font-bold text-primary hover:text-primary-dark">
                Contact USCIS
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Identifier */}
      <Identifier />
    </div>
  );
}
