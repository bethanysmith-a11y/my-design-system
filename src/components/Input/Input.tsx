import { type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes, forwardRef, useId } from 'react';

/**
 * USWDS Text Input — Figma frame 1892:3213 (text-input component set)
 *
 * Figma measurements:
 *   Label:        16px/400 #1b1b1b
 *   Helper text:  16px/400 #757575
 *   Input:        height 40px, border 1px #565c65 (base-dark), 16px/400
 *   Error:        label becomes 700, 4px left border #b50909, error msg 16px/700 #b50909
 *   Success:      1px border on input
 *   Focus:        4px border #005ea2 (primary)
 *   Required:     red asterisk #d54309
 */

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  /** Icon or element rendered before the input (Figma: prefix variant) */
  prefix?: ReactNode;
  /** Text or element rendered after the input (Figma: suffix variant, e.g. "lbs.") */
  suffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, success, required, prefix, suffix, className = '', id, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const hasAddon = !!prefix || !!suffix;

    const borderClass = error
      ? 'border-4 border-l-error-dark border-t-base-dark border-r-base-dark border-b-base-dark'
      : success
        ? 'border border-success-dark'
        : 'border border-base-dark';

    const inputEl = (
      <input
        ref={ref}
        id={inputId}
        className={`h-10 w-full bg-white px-2 font-sans text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary disabled:bg-disabled-light disabled:text-disabled-dark ${hasAddon ? 'border-y border-r border-base-dark' : borderClass} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-required={required || undefined}
        {...rest}
      />
    );

    return (
      <div className={`flex flex-col gap-1 ${error ? 'pl-4 border-l-4 border-l-error-dark' : ''}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`text-base text-base-darkest ${error ? 'font-bold' : ''}`}
          >
            {label}
            {required && <span className="ml-0.5 text-error"> *</span>}
          </label>
        )}

        {helperText && (
          <span className="text-base text-base">{helperText}</span>
        )}

        {error && (
          <span className="text-base font-bold text-error-dark" id={`${inputId}-error`}>
            {error}
          </span>
        )}

        {hasAddon ? (
          <div className="flex items-stretch">
            {prefix && (
              <span className="flex h-10 items-center border border-r-0 border-base-dark bg-base-lightest px-3 text-base text-base-darkest">
                {prefix}
              </span>
            )}
            {inputEl}
            {suffix && (
              <span className="flex h-10 items-center border border-l-0 border-base-dark bg-base-lightest px-3 text-base text-base">
                {suffix}
              </span>
            )}
          </div>
        ) : (
          inputEl
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

/* ===== Textarea ===== */

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, className = '', id, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-base text-base-darkest">
            {label}
          </label>
        )}

        {helperText && (
          <span className="text-base text-base">{helperText}</span>
        )}

        {error && (
          <span className="text-base font-bold text-error-dark" id={`${inputId}-error`}>
            {error}
          </span>
        )}

        <textarea
          ref={ref}
          id={inputId}
          className={`min-h-[80px] w-full border border-base-dark bg-white px-2 py-2 font-sans text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${className}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
