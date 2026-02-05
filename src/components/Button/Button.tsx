import { type ButtonHTMLAttributes } from 'react';

/**
 * USWDS Button component — ported from Figma (file QJD8h4L3NhbdvihveM3AMG)
 *
 * Figma measurements:
 *   default  — 16px bold, padding 12px 20px, radius 4px
 *   big      — 22px bold, padding 16px 24px, radius 4px
 */

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent-cool'
  | 'accent-warm'
  | 'base'
  | 'success'
  | 'error'
  | 'inverse'
  | 'outline'
  | 'outline-inverse';

export type ButtonSize = 'default' | 'big';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/*
 * Every color below is pixel-matched to the Figma component set `button`
 * inside frame 1868:83 of the USWDS design kit.
 *
 * Format: default  →  hover  →  active
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-darker active:bg-primary-darkest',
  secondary:
    'bg-secondary text-white hover:bg-secondary-darker active:bg-secondary-darkest',
  'accent-cool':
    'bg-accent-cool text-base-darkest hover:bg-accent-cool-dark hover:text-white active:bg-accent-cool-darker active:text-white',
  'accent-warm':
    'bg-accent-warm text-white hover:bg-accent-warm-dark active:bg-accent-warm-darker',
  base:
    'bg-base text-white hover:bg-base-dark active:bg-base-darker',
  success:
    'bg-success text-base-darkest hover:bg-success-dark hover:text-white active:bg-success-darker active:text-white',
  error:
    'bg-error text-white hover:bg-error-dark active:bg-error-darker',
  inverse:
    'bg-base-lighter text-base-darkest hover:bg-base-lightest active:bg-white',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:text-primary-darker hover:border-primary-darker active:text-primary-darkest active:border-primary-darkest',
  'outline-inverse':
    'bg-transparent text-base-light border-2 border-base-light hover:text-base-lightest hover:border-base-lightest active:text-white active:border-white',
};

const disabledClasses: Record<ButtonVariant, string> = {
  primary: 'bg-disabled text-white',
  secondary: 'bg-disabled text-white',
  'accent-cool': 'bg-disabled text-white',
  'accent-warm': 'bg-disabled text-white',
  base: 'bg-disabled text-white',
  success: 'bg-disabled text-white',
  error: 'bg-disabled text-white',
  inverse: 'bg-base text-base-darkest',
  outline: 'bg-transparent text-disabled border-2 border-disabled',
  'outline-inverse': 'bg-transparent text-base border-2 border-base',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-5 py-3 text-base rounded-sm',       // 20px 12px, 16px, 4px radius
  big: 'px-6 py-4 text-heading-lg rounded-sm',      // 24px 16px, 22px, 4px radius
};

export function Button({
  variant = 'primary',
  size = 'default',
  disabled,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const colors = disabled ? disabledClasses[variant] : variantClasses[variant];

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center font-sans font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed ${sizeClasses[size]} ${colors} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
