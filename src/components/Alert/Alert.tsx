import type { ReactNode } from 'react';

/**
 * USWDS Alert — Figma frame 1879:1235
 *
 * Figma measurements:
 *   Left accent bar 8px wide, full height
 *   Slim  — padding 8px 16px / 8px 14px, body 16px/400
 *   Full  — padding 16px 16px / 16px 14px, heading 22px/700, body 16px/400
 *   Background: success=#ecf3ec  error=#f4e3db  warning=#faf3d1  info=#e7f6f8
 *   Accent bar: success=#00a91c  error=#d54309   warning=#ffbe2e  info=#00bde3
 */

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  type?: AlertType;
  /** Slim variant hides the heading and icon area */
  slim?: boolean;
  heading?: string;
  children: ReactNode;
  className?: string;
}

const bgClasses: Record<AlertType, string> = {
  info: 'bg-info-lighter',
  success: 'bg-success-lighter',
  warning: 'bg-warning-lighter',
  error: 'bg-error-lighter',
};

const barClasses: Record<AlertType, string> = {
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

const iconPaths: Record<AlertType, string> = {
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  success: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
};

export function Alert({
  type = 'info',
  slim = false,
  heading,
  children,
  className = '',
}: AlertProps) {
  return (
    <div
      className={`flex overflow-hidden ${bgClasses[type]} ${className}`}
      role="alert"
    >
      {/* Left accent bar — 8px wide */}
      <div className={`w-2 shrink-0 ${barClasses[type]}`} />

      <div
        className={`flex flex-1 gap-2 ${
          slim ? 'px-4 py-2' : 'px-4 py-4'
        }`}
      >
        {/* Icon */}
        {!slim && (
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-base-darkest"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={iconPaths[type]} />
          </svg>
        )}

        <div className="flex-1">
          {!slim && heading && (
            <h3 className="text-heading-lg font-bold leading-tight text-base-darkest">
              {heading}
            </h3>
          )}
          <p className="text-base text-base-darkest">{children}</p>
        </div>
      </div>
    </div>
  );
}
