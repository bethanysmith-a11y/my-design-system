import type { ReactNode } from 'react';

/**
 * USWDS Table — Figma frame 1892:2502
 *
 * Figma measurements:
 *   th: bg #f0f0f0 (base-lightest), border 1px #3d4551 (base-darker)
 *       padding 12px 16px top, 11px 16px bottom, 16px/700 text
 *   td: bg white, border 1px #3d4551, padding 8px 16px, 16px/400 text
 *   Variants: default, borderless, striped, scrollable, stacked
 */

export type TableVariant = 'default' | 'borderless' | 'striped';

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  /** Right-align numeric data */
  alignRight?: boolean;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  variant?: TableVariant;
  /** Caption for accessibility */
  caption?: string;
  /** Wrap table in scrollable container */
  scrollable?: boolean;
  /** Stack cells vertically on mobile */
  stacked?: boolean;
  className?: string;
}

export function Table<T>({
  columns,
  data,
  variant = 'default',
  caption,
  scrollable = false,
  stacked = false,
  className = '',
}: TableProps<T>) {
  const isBorderless = variant === 'borderless';
  const isStriped = variant === 'striped';

  const thClass = [
    'px-4 py-3 text-left text-base font-bold text-base-darkest',
    isBorderless ? '' : 'border border-base-darker bg-base-lightest',
    isBorderless ? 'border-b-2 border-base-darker' : '',
  ].join(' ');

  const tdBase = [
    'px-4 py-2 text-base text-base-darkest',
    isBorderless ? '' : 'border border-base-darker',
    isBorderless ? 'border-b border-base-lighter' : '',
  ].join(' ');

  const table = (
    <table className={`w-full border-collapse font-sans ${className}`}>
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.header)}
              scope="col"
              className={`${thClass} ${col.alignRight ? 'text-right' : ''}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr
            key={rowIdx}
            className={isStriped && rowIdx % 2 === 1 ? 'bg-base-lightest' : ''}
          >
            {columns.map((col, colIdx) => {
              const cellContent =
                typeof col.accessor === 'function'
                  ? col.accessor(row)
                  : (row[col.accessor] as ReactNode);

              return (
                <td
                  key={colIdx}
                  className={`${tdBase} ${col.alignRight ? 'text-right' : ''}`}
                  {...(stacked ? { 'data-label': col.header } : {})}
                >
                  {cellContent}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (scrollable) {
    return <div className="overflow-x-auto">{table}</div>;
  }

  return table;
}
