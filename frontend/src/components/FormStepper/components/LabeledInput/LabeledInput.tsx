import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type LabeledInputProps = {
  label: string;
  isRequired: boolean;
} & TextFieldProps;

export const LabeledInput = ({
  label,
  isRequired,
  ...props
}: LabeledInputProps) => {
  return (
    <>
      <Typography variant='body1'>
        {`${label} `}
        {isRequired && (
          <Typography component='span' variant='caption'>
            *
          </Typography>
        )}
      </Typography>
      <TextField required helperText=' ' {...props} />
    </>
  );
};
