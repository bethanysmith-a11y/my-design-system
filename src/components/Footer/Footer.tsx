import type { ReactNode } from 'react';

/**
 * USWDS Footer — Figma frame 1892:246
 *
 * Figma measurements:
 *   Sizes: slim (h~203), medium (h~270), big (h~490)
 *   bg white, top border or return-to-top link
 *   Primary section: bg-base-lightest, links 14px/700
 *   Secondary section: bg-base-darker for big footer, logo + social links
 *   Contact: phone, email in medium/big footer
 *   Slim: single row of links + logo
 */

export type FooterSize = 'slim' | 'medium' | 'big';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterProps {
  size?: FooterSize;
  /** Simple flat links for slim/medium footer */
  links?: FooterLink[];
  /** Columned links for big footer */
  columns?: FooterColumn[];
  /** Logo element */
  logo?: ReactNode;
  /** Agency name */
  agencyName?: string;
  /** Contact phone */
  phone?: string;
  /** Contact email */
  email?: string;
  /** Social media links */
  socialLinks?: { label: string; href: string; icon: ReactNode }[];
  /** Show "Return to top" link */
  returnToTop?: boolean;
  className?: string;
}

export function Footer({
  size = 'medium',
  links = [],
  columns = [],
  logo,
  agencyName,
  phone,
  email,
  socialLinks = [],
  returnToTop = false,
  className = '',
}: FooterProps) {
  return (
    <footer className={`w-full font-sans ${className}`}>
      {/* Return to top */}
      {returnToTop && (
        <div className="border-t border-base-lighter">
          <div className="mx-auto max-w-5xl px-8 py-4 text-right">
            <a href="#top" className="text-sm text-primary hover:text-primary-dark">
              Return to top
            </a>
          </div>
        </div>
      )}

      {/* Primary section — links */}
      <div className="bg-base-lightest">
        <div className="mx-auto max-w-5xl px-8 py-8">
          {size === 'big' && columns.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.heading}>
                  <h3 className="mb-2 text-heading-2xs font-bold uppercase text-base-darkest">
                    {col.heading}
                  </h3>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-heading-2xs text-base-dark hover:text-primary">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className={`flex flex-wrap gap-x-8 gap-y-2 ${size === 'slim' ? 'items-center' : ''}`}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-heading-2xs font-bold text-base-dark hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Secondary section — agency info */}
      <div className={size === 'big' ? 'bg-base-darker' : 'bg-white'}>
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {logo && <span className="shrink-0">{logo}</span>}
            <div>
              {agencyName && (
                <span className={`block text-heading-2xs font-bold ${size === 'big' ? 'text-white' : 'text-base-darkest'}`}>
                  {agencyName}
                </span>
              )}
              {phone && (
                <a href={`tel:${phone}`} className={`block text-heading-2xs ${size === 'big' ? 'text-base-light' : 'text-base-dark'}`}>
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className={`block text-heading-2xs ${size === 'big' ? 'text-base-light' : 'text-base-dark'}`}>
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map((sl) => (
                <a
                  key={sl.label}
                  href={sl.href}
                  aria-label={sl.label}
                  className={`flex h-8 w-8 items-center justify-center rounded-sm ${
                    size === 'big'
                      ? 'bg-base-dark text-white hover:bg-base'
                      : 'bg-base-lightest text-base-dark hover:bg-base-lighter'
                  }`}
                >
                  {sl.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
