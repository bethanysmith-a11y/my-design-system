import { type ReactNode, useState, useRef, useEffect } from 'react';

/**
 * USWDS Tooltip — Figma frame 1892:2372
 *
 * Figma measurements:
 *   Positions: top, bottom, left, right
 *   Background: #1b1b1b (base-darkest), radius 4px
 *   Text: white, 14px/400
 *   Padding: 8px 12px
 *   Arrow: 8px triangle matching background
 */

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  label: string;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-base-darkest border-x-transparent border-b-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-base-darkest border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-base-darkest border-y-transparent border-r-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-base-darkest border-y-transparent border-l-transparent',
};

const arrowSize: Record<TooltipPosition, string> = {
  top: 'border-4',
  bottom: 'border-4',
  left: 'border-4',
  right: 'border-4',
};

export function Tooltip({
  label,
  position = 'top',
  children,
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && visible) setVisible(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  return (
    <span
      ref={triggerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={tooltipId.current}>{children}</span>

      {visible && (
        <span
          id={tooltipId.current}
          role="tooltip"
          className={`absolute z-50 whitespace-nowrap rounded-sm bg-base-darkest px-3 py-2 font-sans text-heading-2xs text-white ${positionClasses[position]}`}
        >
          {label}
          {/* Arrow */}
          <span
            className={`absolute ${arrowSize[position]} ${arrowClasses[position]}`}
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  );
}
