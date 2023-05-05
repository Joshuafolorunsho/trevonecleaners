import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';
import clsx from 'clsx';

interface TextAreaFieldProps {
  id: string;
  placeholder?: string;
  autoFocus?: boolean;
  isRequired?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  hasError: FieldError | undefined;
  className?: string;
  label?: string;
  rows?: number;
  limit?: number | null;
  value?: string;
}

export const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  id,
  placeholder,
  autoFocus = false,
  registration,
  className,
  rows = 5,
  hasError,
  limit = 500,
  value
}) => {
  return (
    <>
      <textarea
        name={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={rows}
        className={clsx(
          'font-WorkSans focus-within:border-secondary w-full rounded-2xl border border-gray-150 bg-gray-150 px-4 py-4 outline-none placeholder:text-sm placeholder:text-gray-950 disabled:bg-gray-100',
          hasError && 'border-red-500',
          className
        )}
        {...registration}
        maxLength={limit ? limit : undefined}
      />
      {limit && (
        <div className="mt-2 flex justify-between text-xs">
          <p className="text-gray-150">Max. {limit} characters</p>
          <p className="text-info-100">
            {value?.length || 0} / {limit}
          </p>
        </div>
      )}
    </>
  );
};
