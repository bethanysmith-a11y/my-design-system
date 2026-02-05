import { type ChangeEvent, useState, useRef } from 'react';

/**
 * USWDS File Input — Figma frame 1892:4140
 *
 * Figma measurements:
 *   Label: 16px/400, helper text: 16px/400 base-dark
 *   Drop zone: border 2px dashed base-dark, bg white, padding 32px center
 *   "Drag file here or choose from folder" text
 *   Selected file: bg #d9e8f6 (primary-lightest), 16px/400, with remove button
 */

export interface FileInputProps {
  label?: string;
  helperText?: string;
  /** Accept specific file types (e.g. ".pdf,.jpg") */
  accept?: string;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
}

export function FileInput({
  label,
  helperText,
  accept,
  multiple = false,
  onChange,
  disabled = false,
  className = '',
}: FileInputProps) {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    const next = multiple ? [...files, ...selected] : selected;
    setFiles(next);
    onChange?.(next);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onChange?.(next);
    // Reset the native input so the same file can be re-selected
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className={`font-sans ${className}`}>
      {label && <label className="mb-1 block text-base text-base-darkest">{label}</label>}
      {helperText && <p className="mb-2 text-base text-base-dark">{helperText}</p>}

      {/* Drop zone */}
      <div
        className={`flex flex-col items-center justify-center rounded-sm border-2 border-dashed px-4 py-8 text-center ${
          disabled
            ? 'border-disabled bg-disabled-light text-disabled-dark'
            : 'border-base-dark bg-white text-base-dark hover:border-primary'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className={`cursor-pointer text-base ${disabled ? '' : 'text-primary hover:text-primary-dark'}`}
        >
          <span className="font-bold underline">Choose from folder</span>
        </label>
        <p className="mt-1 text-sm text-base-dark">or drag files here</p>
      </div>

      {/* Selected files */}
      {files.length > 0 && (
        <ul className="mt-2 space-y-1">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between rounded-sm bg-primary-lightest px-3 py-2 text-base text-base-darkest"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                className="ml-2 shrink-0 text-sm font-bold text-primary hover:text-primary-dark"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
