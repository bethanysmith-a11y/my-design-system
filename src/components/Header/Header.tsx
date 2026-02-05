import { type ReactNode, useState } from 'react';

/**
 * USWDS Header — Figma frame 1892:2114
 *
 * Figma measurements:
 *   Types: basic (h~102), extended (h~187 with secondary nav row)
 *   Logo area: left side, flex with title
 *   Nav links: 14px/700 text, h 53px, current has 4px bottom border primary
 *   Dropdown: bg #162e51 (primary-darkest), white text 14px/400, padding 16px
 *   Mobile: hamburger menu toggle
 *   Padding: 32px horizontal on desktop
 */

export interface NavLink {
  label: string;
  href: string;
  current?: boolean;
  children?: { label: string; href: string }[];
}

export interface HeaderProps {
  /** Site title displayed next to logo */
  title: string;
  /** Logo element (e.g., img or svg) */
  logo?: ReactNode;
  /** Primary navigation links */
  navLinks?: NavLink[];
  /** Extended variant includes secondary nav/search row */
  extended?: boolean;
  /** Secondary content for extended header (e.g., search, secondary links) */
  secondaryContent?: ReactNode;
  className?: string;
}

function HamburgerIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg className={`ml-1 h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}

export function Header({
  title,
  logo,
  navLinks = [],
  extended = false,
  secondaryContent,
  className = '',
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(label: string) {
    setOpenDropdown(openDropdown === label ? null : label);
  }

  return (
    <header className={`w-full bg-white font-sans ${className}`}>
      <div className="mx-auto max-w-5xl px-8">
        {/* Top bar: Logo + Mobile toggle */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {logo && <span className="shrink-0">{logo}</span>}
            <a href="/" className="text-heading-lg font-bold text-base-darkest hover:text-primary">
              {title}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="p-2 text-base-dark lg:hidden"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${mobileOpen ? 'block' : 'hidden'} lg:block ${
            extended ? 'border-t border-base-lighter' : ''
          }`}
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col lg:flex-row">
            {navLinks.map((link) => {
              const hasDropdown = link.children && link.children.length > 0;
              const isDropdownOpen = openDropdown === link.label;

              return (
                <li key={link.label} className="relative">
                  {hasDropdown ? (
                    <button
                      type="button"
                      className={`flex w-full items-center px-4 py-4 text-heading-2xs font-bold lg:py-4 ${
                        link.current
                          ? 'border-b-4 border-primary text-primary'
                          : 'text-base-darker hover:text-primary'
                      }`}
                      aria-expanded={isDropdownOpen}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <ChevronDown open={isDropdownOpen} />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`flex items-center px-4 py-4 text-heading-2xs font-bold ${
                        link.current
                          ? 'border-b-4 border-primary text-primary'
                          : 'text-base-darker hover:text-primary'
                      }`}
                      aria-current={link.current ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  )}

                  {/* Dropdown menu */}
                  {hasDropdown && isDropdownOpen && (
                    <ul className="left-0 z-50 min-w-[240px] bg-primary-darkest p-4 lg:absolute">
                      {link.children!.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block py-2 text-heading-2xs text-white hover:underline"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Extended: secondary content row */}
        {extended && secondaryContent && (
          <div className="border-t border-base-lighter py-3">{secondaryContent}</div>
        )}
      </div>
    </header>
  );
}
