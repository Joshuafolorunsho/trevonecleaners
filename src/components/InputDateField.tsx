import { Controller, FieldError, UseControllerProps } from 'react-hook-form';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import React from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';

import { Label } from '.';

type ReactDatePickPropsWithoutOnChange = Omit<ReactDatePickerProps, 'onChange'>;

type InputDateFieldProps = {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  hasError: FieldError | undefined;
  value?: string;
  isRequired?: boolean;
} & ReactDatePickPropsWithoutOnChange &
  UseControllerProps;

export const InputDateField: React.FC<InputDateFieldProps> = ({
  name,
  label,
  hasError,
  className,
  placeholder = 'Select date',
  dateFormat = 'MMMM d, yyyy',
  isRequired,
  control,
  ...props
}) => {
  return (
    <>
      {!!label && (
        <Label htmlFor={name} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <Controller
        control={control || undefined}
        name={name}
        render={({ field }) => (
          <DatePicker
            className={clsx(
              'font-WorkSans placeholder:text-gray-250 focus-within:border-secondary h-12 w-full rounded-2xl border border-gray-150 bg-gray-150 px-4 text-gray-950 placeholder-gray-950 outline-none placeholder:text-sm disabled:bg-gray-100',
              hasError && 'border-red-500',
              className
            )}
            formatWeekDay={(day) => dayjs(day).format('ddd')}
            placeholderText={placeholder}
            closeOnScroll={true}
            selected={field.value}
            dateFormat={dateFormat}
            name={name}
            onChange={(date) => field.onChange(date)}
            showMonthDropdown
            autoComplete="off"
            showYearDropdown
            dropdownMode="select"
            ref={(elem) => {
              elem && field.ref((elem as unknown as { input: HTMLInputElement }).input);
            }}
            {...props}
          />
        )}
      />
    </>
  );
};
