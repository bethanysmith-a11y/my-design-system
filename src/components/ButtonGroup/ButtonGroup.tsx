import type { ReactNode } from 'react';

/**
 * USWDS Button Group — Figma frame 1892:3789
 *
 * Figma measurements:
 *   Default:   flex row with gap, standard Button instances
 *   Segmented: no gap, buttons joined; left/center/right rounding
 *              padding 10px 24px, outline uses 2px border #005ea2
 */

export interface ButtonGroupProps {
  children: ReactNode;
  segmented?: boolean;
  className?: string;
}

export function ButtonGroup({
  children,
  segmented = false,
  className = '',
}: ButtonGroupProps) {
  return (
    <div
      className={`inline-flex ${
        segmented
          ? '[&>*]:rounded-none [&>*:first-child]:rounded-l-sm [&>*:last-child]:rounded-r-sm'
          : 'gap-2'
      } ${className}`}
      role="group"
    >
      {children}
    </div>
  );
}
