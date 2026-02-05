import { type ReactNode, useState } from 'react';

/**
 * USWDS Accordion — Figma frame 1890:62
 *
 * Figma measurements:
 *   Header: bg #f0f0f0 (base-lightest), padding 12px 20px, 16px/700
 *   Body:   padding 16px 24px, 16px/400
 *   Bordered variant: 4px #f0f0f0 border on body
 */

export interface AccordionItem {
  id: string;
  heading: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  bordered?: boolean;
  /** Allow multiple items open at once */
  multiselect?: boolean;
  className?: string;
}

export function Accordion({
  items,
  bordered = false,
  multiselect = false,
  className = '',
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(multiselect ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={`divide-y divide-base-lighter ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between bg-base-lightest px-5 py-3 text-left font-sans text-base font-bold text-base-darkest hover:bg-base-lighter"
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              {item.heading}
              <svg
                className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={`accordion-body-${item.id}`}
                className={`px-6 py-4 font-sans text-base text-base-darkest ${
                  bordered ? 'border-x-4 border-b-4 border-base-lightest' : ''
                }`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
