import { Control, Controller, FieldErrors } from 'react-hook-form';

import { TITLES } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import { AdBasicInfoFormValues } from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type TitleKey = keyof typeof TITLES;

type LabeledInputProps = {
  type: TitleKey;
  isRequired: boolean;
  control: Control<AdBasicInfoFormValues>;
  errors: FieldErrors<AdBasicInfoFormValues>;
} & TextFieldProps;

export const LabeledInput = ({
  type,
  isRequired,
  control,
  errors,
  ...props
}: LabeledInputProps) => {
  return (
    <Controller
      name={type}
      control={control}
      render={({ field }) => (
        <>
          <Typography variant='body1'>
            {`${TITLES[type]} `}
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
            helperText={errors[type]?.message || ' '}
            error={!!errors[type]}
            {...props}
          />
        </>
      )}
    />
  );
};
