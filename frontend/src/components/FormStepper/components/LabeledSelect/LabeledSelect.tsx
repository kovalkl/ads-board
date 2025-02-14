import { Control, Controller, FieldErrors } from 'react-hook-form';

import { TITLES } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import { AdBasicInfoFormValues } from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

type LabeledSelectProps = {
  type: keyof AdBasicInfoFormValues;
  isRequired: boolean;
  options: { [key: string]: string };
  selectedValue?: string;
  control: Control<AdBasicInfoFormValues>;
  errors: FieldErrors<AdBasicInfoFormValues>;
};

export const LabeledSelect = ({
  type,
  isRequired,
  options,
  control,
  errors,
}: LabeledSelectProps) => {
  const optionsKey = Object.keys(options);

  return (
    <Controller
      name={type}
      control={control}
      render={({ field }) => (
        <FormControl>
          <Typography variant='body1'>
            {`${TITLES[type]} `}
            {isRequired && (
              <Typography component='span' variant='caption'>
                *
              </Typography>
            )}
          </Typography>
          <Select {...field} value={field.value || ''}>
            {optionsKey.map((option) => (
              <MenuItem value={option} key={option}>
                {options[option]}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors[type]?.message || ' '}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
