import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

type LabeledSelectProps = {
  label: string;
  isRequired: boolean;
  options: string[];
  selectedValue?: string;
};

export const LabeledSelect = ({
  label,
  isRequired,
  options,
  selectedValue,
}: LabeledSelectProps) => {
  return (
    <FormControl required>
      <Typography variant='body1'>
        {`${label} `}
        {isRequired && (
          <Typography component='span' variant='caption'>
            *
          </Typography>
        )}
      </Typography>
      <Select value={selectedValue || ''}>
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText> </FormHelperText>
    </FormControl>
  );
};
