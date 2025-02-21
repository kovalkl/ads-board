import { ReactNode } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

type LabeledSelectProps<T extends FieldValues> = {
  name: Path<T>;
  isRequired: boolean;
  options: string[];
  control: Control<T>;
  errors: FieldErrors<T>;
  titles: Record<Path<T>, string>;
  defaultValue?: string;
};

export const LabeledSelect = <T extends FieldValues>({
  name,
  isRequired,
  options,
  control,
  errors,
  titles,
  defaultValue,
}: LabeledSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field }) => (
        <FormControl>
          <Typography variant='body1'>
            {`${titles[name]} `}
            {isRequired && (
              <Typography component='span' variant='caption'>
                *
              </Typography>
            )}
          </Typography>
          <Select {...field} value={field.value || ''}>
            {options.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {(errors[name]?.message as ReactNode) || ' '}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
