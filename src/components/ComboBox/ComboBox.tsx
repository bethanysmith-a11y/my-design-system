import { useState, useRef, useEffect } from 'react';

/**
 * USWDS Combo Box — Figma frame 1892:3864
 *
 * Figma measurements:
 *   States: default, options-displayed, options-selected
 *   Input: standard text-input styling with dropdown chevron
 *   Options list: border 1px base-dark, bg white, max-height scrollable
 *   Option: 16px/400, padding 8px 12px, hover bg primary-lightest
 *   Selected option: bg primary text white
 */

export interface ComboBoxOption {
  value: string;
  label: string;
}

export interface ComboBoxProps {
  label?: string;
  options: ComboBoxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function ComboBox({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState(value ?? '');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedLabel = options.find((o) => o.value === selectedValue)?.label ?? '';
  const displayValue = open ? query : selectedLabel;

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function handleSelect(option: ComboBoxOption) {
    setSelectedValue(option.value);
    setQuery('');
    setOpen(false);
    onChange?.(option.value);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    if (!open) setOpen(true);
  }

  function handleFocus() {
    if (!disabled) {
      setOpen(true);
      setQuery('');
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      setQuery('');
    }
  }

  return (
    <div ref={containerRef} className={`relative font-sans ${className}`}>
      {label && <label className="mb-1 block text-base text-base-darkest">{label}</label>}

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          className={`w-full border bg-white py-2 pl-2 pr-10 text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${
            disabled ? 'border-disabled bg-disabled-light text-disabled-dark' : 'border-base-dark'
          }`}
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
        {/* Chevron */}
        <button
          type="button"
          tabIndex={-1}
          className="absolute right-0 top-0 flex h-full w-10 items-center justify-center text-base-dark"
          onClick={() => {
            if (!disabled) {
              setOpen(!open);
              inputRef.current?.focus();
            }
          }}
          aria-label="Toggle options"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={open ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z'} />
          </svg>
        </button>
      </div>

      {/* Options dropdown */}
      {open && filtered.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 mt-0 max-h-60 w-full overflow-auto border border-base-dark bg-white shadow-md"
        >
          {filtered.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === selectedValue}
              className={`cursor-pointer px-3 py-2 text-base ${
                option.value === selectedValue
                  ? 'bg-primary font-bold text-white'
                  : 'text-base-darkest hover:bg-primary-lightest'
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
