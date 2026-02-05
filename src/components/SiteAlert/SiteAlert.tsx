import type { ReactNode } from 'react';

/**
 * USWDS Site Alert — Figma frame 1892:4247
 *
 * Figma measurements:
 *   Types: info (bg #e7f6f8 info-lighter), emergency (bg #9c3d0f ~error-darker area)
 *   Styles: default (heading + body), list, no-icon, slim
 *   Full-width with max-width content area
 *   Info: bg-info-lighter, accent-bar bg-info
 *   Emergency: bg ~error-darker / dark amber, accent-bar bg-error-dark
 *   Heading: 22px/700, Body: 16px/400
 */

export type SiteAlertType = 'info' | 'emergency';
export type SiteAlertStyle = 'default' | 'slim' | 'no-icon' | 'list';

export interface SiteAlertProps {
  type?: SiteAlertType;
  style?: SiteAlertStyle;
  heading?: string;
  children: ReactNode;
  className?: string;
}

const typeClasses: Record<SiteAlertType, { bg: string; bar: string; icon: string }> = {
  info: {
    bg: 'bg-info-lighter',
    bar: 'bg-info',
    icon: 'text-info-darker',
  },
  emergency: {
    bg: 'bg-error-lighter',
    bar: 'bg-error-dark',
    icon: 'text-error-dark',
  },
};

const iconPaths: Record<SiteAlertType, string> = {
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  emergency:
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
};

export function SiteAlert({
  type = 'info',
  style = 'default',
  heading,
  children,
  className = '',
}: SiteAlertProps) {
  const t = typeClasses[type];
  const isSlim = style === 'slim';
  const showIcon = style !== 'no-icon' && !isSlim;

  return (
    <section
      className={`w-full ${t.bg} ${className}`}
      aria-label="Site alert"
    >
      <div className="mx-auto flex max-w-5xl">
        {/* Accent bar */}
        <div className={`w-2 shrink-0 ${t.bar}`} />

        <div className={`flex flex-1 gap-3 ${isSlim ? 'px-4 py-2' : 'px-4 py-4'}`}>
          {/* Icon */}
          {showIcon && (
            <svg
              className={`mt-0.5 h-6 w-6 shrink-0 ${t.icon}`}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={iconPaths[type]} />
            </svg>
          )}

          <div className="flex-1 font-sans">
            {heading && !isSlim && (
              <h2 className="text-heading-lg font-bold text-base-darkest">{heading}</h2>
            )}
            <div className="text-base text-base-darkest">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
