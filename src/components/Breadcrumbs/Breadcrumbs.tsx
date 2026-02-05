/**
 * USWDS Breadcrumbs — Figma frame 1892:3816
 *
 * Figma measurements:
 *   Links: 16px/400 #005ea2 (primary)
 *   Current page: 16px/400 #1b1b1b (base-darkest), no link
 *   Separator: chevron icon between items
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`font-sans ${className}`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <svg className="h-4 w-4 text-base" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              )}
              {isLast ? (
                <span className="text-base text-base-darkest" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href ?? '#'} className="text-base text-primary hover:text-primary-dark">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
