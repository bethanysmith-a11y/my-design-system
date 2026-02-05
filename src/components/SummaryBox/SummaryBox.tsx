import type { ReactNode } from 'react';

/**
 * USWDS Summary Box — Figma frame 1892:4238
 *
 * Figma measurements:
 *   Container: bg #e7f6f8 (info-lighter), border 1px #99deea (info-light), radius 4px
 *   Padding: 24px all sides
 *   Heading: 22px/700 #1b1b1b
 *   Body: 16px/400 #1b1b1b
 */

export interface SummaryBoxProps {
  heading: string;
  children: ReactNode;
  className?: string;
}

export function SummaryBox({ heading, children, className = '' }: SummaryBoxProps) {
  return (
    <div
      className={`rounded-sm border border-info-light bg-info-lighter p-6 font-sans ${className}`}
    >
      <h3 className="text-heading-lg font-bold text-base-darkest">{heading}</h3>
      <div className="mt-2 text-base text-base-darkest">{children}</div>
    </div>
  );
}
