import type { ReactNode } from 'react';

/**
 * USWDS Card — Figma frame 1892:5111
 *
 * Figma measurements:
 *   Container: bg white, border 1px #dfe1e2 (~base-lighter), radius 4px
 *   Title:     22px/700, color #1b1b1b, padding 24px 25px 24px 8px
 *   Body:      16px/400, color #1b1b1b, padding 24px 24px 8px 8px
 *   Footer:    padding 24px 24px 8px 24px
 *   Vertical:  default (no media), media-first, title-first, inset
 *   Flag:      media-left, media-right (horizontal layout)
 */

export type CardLayout =
  | 'default'
  | 'media-first'
  | 'title-first'
  | 'inset'
  | 'flag-left'
  | 'flag-right';

export interface CardProps {
  title?: string;
  children: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
  layout?: CardLayout;
  className?: string;
}

export function Card({
  title,
  children,
  media,
  footer,
  layout = 'default',
  className = '',
}: CardProps) {
  const isFlag = layout === 'flag-left' || layout === 'flag-right';

  /* Vertical card content — order varies by layout */
  const titleBlock = title && (
    <div className="px-6 pb-2 pt-6">
      <h3 className="text-heading-lg font-bold text-base-darkest">{title}</h3>
    </div>
  );

  const bodyBlock = (
    <div className="px-6 py-2 text-base text-base-darkest">{children}</div>
  );

  const footerBlock = footer && (
    <div className="px-6 pb-6 pt-2">{footer}</div>
  );

  const mediaBlock = media && (
    <div className="overflow-hidden">{media}</div>
  );

  /* Inset: media is inside the body padding area */
  const insetMediaBlock = media && (
    <div className="mx-6 mt-4 overflow-hidden">{media}</div>
  );

  function renderVerticalContent() {
    switch (layout) {
      /* media-first (default with media): media → title → body → footer */
      case 'media-first':
        return <>{mediaBlock}{titleBlock}{bodyBlock}{footerBlock}</>;

      /* title-first: title → media → body → footer */
      case 'title-first':
        return <>{titleBlock}{mediaBlock}{bodyBlock}{footerBlock}</>;

      /* inset: title → inset media → body → footer */
      case 'inset':
        return <>{titleBlock}{insetMediaBlock}{bodyBlock}{footerBlock}</>;

      /* default (no media expected, but render if provided): media → title → body → footer */
      default:
        return <>{mediaBlock}{titleBlock}{bodyBlock}{footerBlock}</>;
    }
  }

  /* Flag (horizontal) layout */
  if (isFlag) {
    return (
      <div
        className={`flex overflow-hidden rounded-sm border border-base-lighter bg-white ${
          layout === 'flag-right' ? 'flex-row-reverse' : 'flex-row'
        } ${className}`}
      >
        {media && (
          <div className="w-1/3 shrink-0 overflow-hidden">{media}</div>
        )}
        <div className="flex flex-1 flex-col">
          {titleBlock}
          {bodyBlock}
          {footerBlock}
        </div>
      </div>
    );
  }

  /* Vertical layout */
  return (
    <div
      className={`overflow-hidden rounded-sm border border-base-lighter bg-white ${className}`}
    >
      {renderVerticalContent()}
    </div>
  );
}
