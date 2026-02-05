/**
 * USWDS Pagination — Figma frame 1892:4485
 *
 * Figma measurements:
 *   Button: 40x40, gap 7px between items
 *   Selected: bg #005ea2 (primary), white text, 16px/700
 *   Unselected: bg white, border 1px #565c65 (base-dark), 16px/400 #005ea2 (primary)
 *   Prev/Next: text-only links with chevron icons
 *   Ellipsis: no border, centered dots
 */

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Maximum page buttons to show (excluding prev/next) */
  maxSlots?: number;
  className?: string;
}

function getVisiblePages(current: number, total: number, slots: number): (number | 'ellipsis')[] {
  if (total <= slots) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [];
  const sideSlots = Math.floor((slots - 3) / 2); // slots for each side, minus first/last/current

  // Always show first page
  pages.push(1);

  const start = Math.max(2, current - sideSlots);
  const end = Math.min(total - 1, current + sideSlots);

  if (start > 2) pages.push('ellipsis');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('ellipsis');

  // Always show last page
  if (total > 1) pages.push(total);

  return pages;
}

const chevronLeft = (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const chevronRight = (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxSlots = 7,
  className = '',
}: PaginationProps) {
  const pages = getVisiblePages(currentPage, totalPages, maxSlots);

  return (
    <nav className={`font-sans ${className}`} aria-label="Pagination">
      <ul className="flex items-center gap-[7px]">
        {/* Previous */}
        {currentPage > 1 && (
          <li>
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-2 text-base font-normal text-primary hover:text-primary-dark"
              aria-label="Previous page"
              onClick={() => onPageChange(currentPage - 1)}
            >
              {chevronLeft}
              <span className="hidden sm:inline">Previous</span>
            </button>
          </li>
        )}

        {/* Page buttons */}
        {pages.map((page, i) =>
          page === 'ellipsis' ? (
            <li key={`ellipsis-${i}`} aria-hidden="true">
              <span className="flex h-10 w-10 items-center justify-center text-base text-base-dark">
                &hellip;
              </span>
            </li>
          ) : (
            <li key={page}>
              <button
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-sm text-base ${
                  page === currentPage
                    ? 'bg-primary font-bold text-white'
                    : 'border border-base-dark bg-white text-primary hover:bg-base-lightest'
                }`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ),
        )}

        {/* Next */}
        {currentPage < totalPages && (
          <li>
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-2 text-base font-normal text-primary hover:text-primary-dark"
              aria-label="Next page"
              onClick={() => onPageChange(currentPage + 1)}
            >
              <span className="hidden sm:inline">Next</span>
              {chevronRight}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
