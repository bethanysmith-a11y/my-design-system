/**
 * USWDS Sidenav — Figma frame 1892:2464
 *
 * Figma measurements:
 *   Level 1: 14px/700 text, padding inline, border-left 4px
 *   Level 2: 14px/400 text, indented
 *   Level 3: 14px/400 text, further indented
 *   Current item: border-left 4px primary (#005ea2), text primary
 *   Non-current: text base-darker (#3d4551), border-left transparent
 *   Hover: bg base-lightest
 *   Item height: ~37px
 *   Separator: 1px base-lighter between level-1 items
 */

export interface SidenavItem {
  label: string;
  href: string;
  current?: boolean;
  children?: SidenavItem[];
}

export interface SidenavProps {
  items: SidenavItem[];
  className?: string;
}

function SidenavList({ items, level = 1 }: { items: SidenavItem[]; level?: number }) {
  const indent = level === 2 ? 'pl-4' : level >= 3 ? 'pl-8' : '';

  return (
    <ul className={`${level === 1 ? 'divide-y divide-base-lighter border-y border-base-lighter' : ''} ${indent}`}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={`flex items-center px-4 py-2 text-heading-2xs font-sans ${
              item.current
                ? 'border-l-4 border-primary font-bold text-primary'
                : 'border-l-4 border-transparent text-base-darker hover:bg-base-lightest'
            } ${level === 1 ? 'font-bold' : 'font-normal'}`}
          >
            {item.label}
          </a>
          {item.children && item.children.length > 0 && (
            <SidenavList items={item.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function Sidenav({ items, className = '' }: SidenavProps) {
  return (
    <nav className={`font-sans ${className}`} aria-label="Side navigation">
      <SidenavList items={items} />
    </nav>
  );
}
