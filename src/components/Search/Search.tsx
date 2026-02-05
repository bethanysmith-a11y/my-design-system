import { type InputHTMLAttributes, forwardRef } from 'react';

/**
 * USWDS Search — Figma frame 1892:3187
 *
 * Figma measurements:
 *   Sizes: default (16px button text), big (22px button text), small (icon-only button)
 *   Input: standard text-input styling
 *   Button: primary blue, "Search" label or icon
 */

export type SearchSize = 'default' | 'big' | 'small';

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SearchSize;
  onSearch?: (value: string) => void;
  className?: string;
}

const searchIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const sizeClasses = {
  default: { input: 'h-10 text-base', button: 'px-5 py-3 text-base' },
  big: { input: 'h-12 text-heading-lg', button: 'px-6 py-3 text-heading-lg' },
  small: { input: 'h-8 text-sm', button: 'px-2 py-1' },
};

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ size = 'default', onSearch, className = '', ...rest }, ref) => {
    const s = sizeClasses[size];

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const input = form.querySelector('input') as HTMLInputElement;
      onSearch?.(input.value);
    }

    return (
      <form
        className={`flex font-sans ${className}`}
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          ref={ref}
          type="search"
          className={`w-full border border-base-dark bg-white px-2 font-sans text-base-darkest placeholder:text-base focus:outline-none focus:ring-4 focus:ring-primary ${s.input}`}
          {...rest}
        />
        <button
          type="submit"
          className={`shrink-0 bg-primary font-bold text-white hover:bg-primary-darker active:bg-primary-darkest ${s.button}`}
        >
          {size === 'small' ? searchIcon : 'Search'}
        </button>
      </form>
    );
  },
);

Search.displayName = 'Search';
