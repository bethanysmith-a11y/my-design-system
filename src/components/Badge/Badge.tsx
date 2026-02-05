import type { ReactNode } from 'react';

/**
 * USWDS Tag/Badge — Figma frame 1892:2305
 *
 * Figma measurements:
 *   default — 14px/400, padding 2px 8px, radius 2px, bg #5c5c5c, text white
 *   big     — 16px/400, padding 4px 8px, radius 2px, bg #5c5c5c, text white
 *   USWDS also has colour variants for system status
 */

export type BadgeSize = 'default' | 'big';

export type BadgeVariant =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export interface BadgeProps {
  children: ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  /* Figma-native: gray bg #5c5c5c */
  default: 'bg-base-dark text-white',
  /* Extended — not in Figma, but useful for status badges */
  info: 'bg-info text-base-darkest',
  success: 'bg-success text-base-darkest',
  warning: 'bg-warning text-base-darkest',
  error: 'bg-error text-white',
};

const sizeClasses: Record<BadgeSize, string> = {
  default: 'px-2 py-0.5 text-sm',   // 8px 2px, 14px
  big: 'px-2 py-1 text-base',        // 8px 4px, 16px
};

export function Badge({
  children,
  size = 'default',
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-sm font-sans uppercase ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
