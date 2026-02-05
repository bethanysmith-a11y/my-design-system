import type { ReactNode } from 'react';

/**
 * USWDS Collection — Figma frame 1892:4622
 *
 * Figma measurements:
 *   Types: default, heading-only, calendar, media
 *   Heading: 18px/700 primary (link), body 16px/400 base-darkest
 *   Date tag: 16px/400 base-dark
 *   Items separated by 1px line (base-lighter)
 *   Calendar display: month 13px uppercase, day 32px bold
 */

export type CollectionItemType = 'default' | 'heading-only' | 'calendar' | 'media';

export interface CollectionItemData {
  heading: string;
  href?: string;
  description?: ReactNode;
  date?: string;
  /** Calendar display date parts */
  calendarDate?: { month: string; day: string | number };
  /** Media thumbnail URL */
  mediaSrc?: string;
  mediaAlt?: string;
  meta?: ReactNode;
}

export interface CollectionProps {
  items: CollectionItemData[];
  type?: CollectionItemType;
  heading?: string;
  className?: string;
}

function CalendarDate({ month, day }: { month: string; day: string | number }) {
  return (
    <div className="flex w-12 shrink-0 flex-col items-center border-4 border-base-lighter bg-white text-center">
      <span className="w-full bg-base-darker px-1 py-0.5 text-heading-3xs font-bold uppercase text-white">
        {month}
      </span>
      <span className="py-1 text-heading-xl font-bold text-base-darkest">{day}</span>
    </div>
  );
}

export function Collection({
  items,
  type = 'default',
  heading,
  className = '',
}: CollectionProps) {
  return (
    <div className={`font-sans ${className}`}>
      {heading && (
        <h2 className="mb-2 border-b border-base-lighter pb-2 text-heading-lg font-bold text-base-darkest">
          {heading}
        </h2>
      )}

      <ul className="divide-y divide-base-lighter">
        {items.map((item, i) => (
          <li key={i} className="py-3">
            <div className="flex gap-4">
              {/* Calendar thumbnail */}
              {type === 'calendar' && item.calendarDate && (
                <CalendarDate month={item.calendarDate.month} day={item.calendarDate.day} />
              )}

              {/* Media thumbnail */}
              {type === 'media' && item.mediaSrc && (
                <img
                  src={item.mediaSrc}
                  alt={item.mediaAlt ?? ''}
                  className="h-16 w-16 shrink-0 rounded-sm object-cover"
                />
              )}

              <div className="flex-1">
                <h3 className="text-lg font-bold leading-snug">
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:text-primary-dark">
                      {item.heading}
                    </a>
                  ) : (
                    <span className="text-primary">{item.heading}</span>
                  )}
                </h3>

                {type !== 'heading-only' && item.description && (
                  <p className="mt-1 text-base text-base-darkest">{item.description}</p>
                )}

                {item.date && (
                  <span className="mt-1 block text-sm text-base-dark">{item.date}</span>
                )}

                {item.meta && <div className="mt-1 text-sm text-base-dark">{item.meta}</div>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
