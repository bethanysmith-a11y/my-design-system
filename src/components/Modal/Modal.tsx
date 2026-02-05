import { type ReactNode, useEffect, useRef } from 'react';

/**
 * USWDS Modal — Figma frame 1892:2033
 *
 * Figma measurements:
 *   Sizes: default (max-w 480px), lg (max-w 800px)
 *   Overlay: rgba(0,0,0,0.7)
 *   Content: bg white, radius 5px, padding 32px
 *   Heading: 22px/700 #1b1b1b
 *   Body: 16px/400 #1b1b1b
 *   Close icon button top-right
 *   Forced action: hides close button + overlay click
 */

export type ModalSize = 'default' | 'lg';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  heading?: string;
  children: ReactNode;
  size?: ModalSize;
  /** Forced action hides close button and prevents overlay dismiss */
  forcedAction?: boolean;
  footer?: ReactNode;
  className?: string;
}

const sizeClasses: Record<ModalSize, string> = {
  default: 'max-w-[480px]',
  lg: 'max-w-[800px]',
};

export function Modal({
  open,
  onClose,
  heading,
  children,
  size = 'default',
  forcedAction = false,
  footer,
  className = '',
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    function handleCancel(e: Event) {
      if (forcedAction) e.preventDefault();
    }
    el.addEventListener('cancel', handleCancel);
    return () => el.removeEventListener('cancel', handleCancel);
  }, [forcedAction]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (!forcedAction && e.target === dialogRef.current) {
      onClose();
    }
  }

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`fixed inset-0 m-auto w-full bg-transparent p-4 backdrop:bg-black/70 ${sizeClasses[size]} ${className}`}
      onClick={handleOverlayClick}
    >
      <div className="rounded-md bg-white p-8 font-sans shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between">
          {heading && (
            <h2 className="text-heading-lg font-bold text-base-darkest">{heading}</h2>
          )}
          {!forcedAction && (
            <button
              type="button"
              className="ml-auto -mr-2 -mt-2 p-2 text-base-dark hover:text-base-darkest"
              aria-label="Close modal"
              onClick={onClose}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>

        {/* Body */}
        <div className="mt-4 text-base text-base-darkest">{children}</div>

        {/* Footer */}
        {footer && <div className="mt-6 flex gap-2">{footer}</div>}
      </div>
    </dialog>
  );
}
