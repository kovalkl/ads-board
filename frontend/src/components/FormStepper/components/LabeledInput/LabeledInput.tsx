import { ReactNode } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type LabeledInputProps<T extends FieldValues> = {
  name: Path<T>;
  isRequired: boolean;
  control: Control<T>;
  errors: FieldErrors<T>;
  defaultValue?: string;
  titles: Record<Path<T>, string>;
} & TextFieldProps;

export const LabeledInput = <T extends FieldValues>({
  name,
  isRequired,
  control,
  errors,
  titles,
  defaultValue = '',
  ...props
}: LabeledInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field }) => (
        <>
          <Typography variant='body1'>
            {`${titles[name]} `}
            {isRequired && (
              <Typography component='span' variant='caption'>
                *
              </Typography>
            )}
          </Typography>
          <TextField
            {...field}
            value={field.value || ''}
            required
            helperText={(errors[name]?.message as ReactNode) || ' '}
            error={!!errors[name]}
            {...props}
            onChange={(e) => field.onChange(e)}
          />
        </>
      )}
    />
  );
};
