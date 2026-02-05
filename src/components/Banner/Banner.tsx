import { useState } from 'react';

/**
 * USWDS Banner — Figma frame 1892:2282
 *
 * Figma measurements:
 *   Container: bg #f0f0f0 (base-lightest), padding 8px 16px / 4px 16px
 *   Text: 12px/400 #1b1b1b
 *   Link: 12px/400 #005ea2 (primary)
 */

export interface BannerProps {
  className?: string;
}

export function Banner({ className = '' }: BannerProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-base-lightest font-sans ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-base-darkest">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='11' fill='none'%3E%3Cpath fill='%23B31942' d='M0 0h16v11H0z'/%3E%3Cpath fill='%23fff' d='M0 1h16v1H0zm0 2h16v1H0zm0 2h16v1H0zm0 2h16v1H0zm0 2h16v1H0z'/%3E%3Cpath fill='%233C3B6E' d='M0 0h7v6H0z'/%3E%3C/svg%3E"
            alt="U.S. flag"
            className="h-3 w-4"
          />
          <span>An official website of the United States government</span>
          <button
            type="button"
            className="text-primary underline"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            Here&rsquo;s how you know
          </button>
        </div>

        {expanded && (
          <div className="mt-3 grid gap-4 pb-2 text-xs text-base-darkest sm:grid-cols-2">
            <div className="flex gap-2">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-info" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
              </svg>
              <div>
                <p className="font-bold">Official websites use .gov</p>
                <p>A <strong>.gov</strong> website belongs to an official government organization in the United States.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <div>
                <p className="font-bold">Secure .gov websites use HTTPS</p>
                <p>A <strong>lock</strong> or <strong>https://</strong> means you&rsquo;ve safely connected to the .gov website.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
