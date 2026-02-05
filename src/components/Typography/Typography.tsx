import type { ElementType, HTMLAttributes, ReactNode } from 'react';

/**
 * USWDS Typography — Figma frames 63:49 (Typography) + 63:51 (Typescale)
 *
 * Figma measurements (Public Sans):
 *   display — 48px/300   |   h1 — 40px/700  line-height 1.2
 *   h2 — 32px/700        |   h3 — 22px/400  line-height 1.2
 *   h4 — 16px/700        |   h5 — 15px/700  line-height 1.2
 *   h6 — 13px/400 uppercase  letter-spacing 0.325
 *   body — 16px/400  line-height 1.62
 *   intro/lead — 22px/400  line-height 1.62
 *   small/caption — 14px/400
 */

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'body'
  | 'small';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
}

const defaultTag: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lead: 'p',
  body: 'p',
  small: 'p',
};

const variantClasses: Record<TypographyVariant, string> = {
  display:
    'text-heading-3xl font-light leading-heading text-base-darkest',
  h1:
    'text-heading-2xl font-bold leading-heading text-base-darkest',
  h2:
    'text-heading-xl font-bold leading-heading text-base-darkest',
  h3:
    'text-heading-lg leading-heading text-base-darkest',
  h4:
    'text-heading-sm font-bold leading-heading text-base-darkest',
  h5:
    'text-heading-xs font-bold leading-heading text-base-darkest',
  h6:
    'text-heading-3xs uppercase tracking-wide text-base-darkest',
  lead:
    'text-heading-lg leading-body text-base-darkest',
  body:
    'text-base leading-body text-base-darkest',
  small:
    'text-heading-2xs text-base-darkest',
};

export function Typography({
  variant = 'body',
  as,
  className = '',
  children,
  ...rest
}: TypographyProps) {
  const Tag = as ?? defaultTag[variant];

  return (
    <Tag className={`font-sans ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
