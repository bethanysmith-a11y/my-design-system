import { useState, useRef, useEffect } from 'react';

/**
 * USWDS Date Picker — Figma frame 1892:3927
 *
 * Figma measurements:
 *   Input: standard text-input (268px) with calendar icon button (40x40)
 *   Calendar dropdown: bg white, border 1px base-dark, shadow
 *   Month/year header: 16px/700, prev/next arrow buttons
 *   Day cells: 32x32, text 14px/400
 *   Selected day: bg primary, text white
 *   Today: border 2px primary
 *   Hint text (optional): 16px/400 base-dark
 */

export interface DatePickerProps {
  label?: string;
  hint?: string;
  value?: string;
  onChange?: (date: string) => void;
  disabled?: boolean;
  className?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number) {
  return `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
}

function parseDate(str: string): { year: number; month: number; day: number } | null {
  const match = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  return { month: parseInt(match[1], 10) - 1, day: parseInt(match[2], 10), year: parseInt(match[3], 10) };
}

export function DatePicker({
  label,
  hint,
  value,
  onChange,
  disabled = false,
  className = '',
}: DatePickerProps) {
  const today = new Date();
  const parsed = value ? parseDate(value) : null;

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(parsed?.year ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.month ?? today.getMonth());
  const [selected, setSelected] = useState(value ?? '');
  const [inputValue, setInputValue] = useState(value ?? '');
  const containerRef = useRef<HTMLDivElement>(null);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
  const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  function selectDay(day: number) {
    const dateStr = formatDate(viewYear, viewMonth, day);
    setSelected(dateStr);
    setInputValue(dateStr);
    setOpen(false);
    onChange?.(dateStr);
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  function handleInputBlur() {
    const p = parseDate(inputValue);
    if (p) {
      const dateStr = formatDate(p.year, p.month, p.day);
      setSelected(dateStr);
      setViewYear(p.year);
      setViewMonth(p.month);
      onChange?.(dateStr);
    }
  }

  // Build calendar grid
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div ref={containerRef} className={`relative font-sans ${className}`}>
      {label && <label className="mb-1 block text-base text-base-darkest">{label}</label>}
      {hint && <p className="mb-1 text-base text-base-dark">{hint}</p>}

      <div className="flex">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          className={`w-full border bg-white px-2 py-2 text-base text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${
            disabled ? 'border-disabled bg-disabled-light' : 'border-base-dark'
          }`}
          value={inputValue}
          disabled={disabled}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputBlur}
        />
        <button
          type="button"
          disabled={disabled}
          className={`flex h-auto w-10 shrink-0 items-center justify-center border border-l-0 ${
            disabled ? 'border-disabled bg-disabled-light text-disabled-dark' : 'border-base-dark bg-base-lightest text-base-dark hover:bg-base-lighter'
          }`}
          aria-label="Toggle calendar"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        </button>
      </div>

      {/* Calendar dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-72 border border-base-dark bg-white p-3 shadow-md">
          {/* Month/Year header */}
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              className="p-1 text-base-dark hover:text-base-darkest"
              onClick={prevMonth}
              aria-label="Previous month"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <span className="text-base font-bold text-base-darkest">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              className="p-1 text-base-dark hover:text-base-darkest"
              onClick={nextMonth}
              aria-label="Next month"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 text-center text-sm font-bold text-base-dark">
            {DAYS.map((d) => (
              <span key={d} className="py-1">{d}</span>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 text-center">
            {cells.map((day, i) => {
              if (day === null) return <span key={`empty-${i}`} />;
              const dateStr = formatDate(viewYear, viewMonth, day);
              const isSelected = dateStr === selected;
              const isToday = dateStr === todayStr;

              return (
                <button
                  key={day}
                  type="button"
                  className={`m-0.5 flex h-8 w-8 items-center justify-center rounded-sm text-sm ${
                    isSelected
                      ? 'bg-primary font-bold text-white'
                      : isToday
                        ? 'border-2 border-primary text-base-darkest'
                        : 'text-base-darkest hover:bg-primary-lightest'
                  }`}
                  onClick={() => selectDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
