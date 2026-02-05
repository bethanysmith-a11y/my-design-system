import { type InputHTMLAttributes, type TextareaHTMLAttributes, useState, forwardRef } from 'react';

/**
 * USWDS Character Count — Figma frame 1892:3838
 *
 * Figma measurements:
 *   Text input or textarea with character count hint below
 *   Hint: 16px/400, shows "X characters allowed" or "X characters over limit"
 *   Over-limit: error color, input border becomes error
 *   Input follows standard text-input styling
 */

export interface CharacterCountInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  maxLength: number;
  /** Show hint text before interaction */
  showHint?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export interface CharacterCountTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  maxLength: number;
  showHint?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

function HintText({ current, max }: { current: number; max: number }) {
  const remaining = max - current;
  const isOver = remaining < 0;

  return (
    <span
      className={`mt-1 block text-base ${isOver ? 'font-bold text-error' : 'text-base-dark'}`}
      aria-live="polite"
    >
      {isOver
        ? `${Math.abs(remaining)} character${Math.abs(remaining) !== 1 ? 's' : ''} over limit`
        : `${remaining} character${remaining !== 1 ? 's' : ''} allowed`}
    </span>
  );
}

export const CharacterCountInput = forwardRef<HTMLInputElement, CharacterCountInputProps>(
  ({ label, maxLength, showHint = true, onChange, className = '', ...rest }, ref) => {
    const [value, setValue] = useState((rest.defaultValue as string) ?? '');
    const isOver = value.length > maxLength;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`font-sans ${className}`}>
        {label && <label className="mb-1 block text-base text-base-darkest">{label}</label>}
        <input
          ref={ref}
          type="text"
          className={`w-full border bg-white px-2 py-2 text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${
            isOver ? 'border-error' : 'border-base-dark'
          }`}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {showHint && <HintText current={value.length} max={maxLength} />}
      </div>
    );
  },
);

CharacterCountInput.displayName = 'CharacterCountInput';

export const CharacterCountTextarea = forwardRef<HTMLTextAreaElement, CharacterCountTextareaProps>(
  ({ label, maxLength, showHint = true, onChange, className = '', rows = 5, ...rest }, ref) => {
    const [value, setValue] = useState((rest.defaultValue as string) ?? '');
    const isOver = value.length > maxLength;

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`font-sans ${className}`}>
        {label && <label className="mb-1 block text-base text-base-darkest">{label}</label>}
        <textarea
          ref={ref}
          rows={rows}
          className={`w-full border bg-white px-2 py-2 text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${
            isOver ? 'border-error' : 'border-base-dark'
          }`}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {showHint && <HintText current={value.length} max={maxLength} />}
      </div>
    );
  },
);

CharacterCountTextarea.displayName = 'CharacterCountTextarea';
