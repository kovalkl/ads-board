import { useForm } from 'react-hook-form';

import { TYPE_OPTIONS } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import { schema } from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AdBasicInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <Stack sx={{ maxWidth: '760px' }}>
      <Typography variant='h2'>Общая информация</Typography>

      <LabeledSelect
        type='type'
        control={control}
        errors={errors}
        isRequired
        options={TYPE_OPTIONS}
      />

      <LabeledInput type='name' control={control} errors={errors} isRequired />

      <LabeledInput
        type='description'
        control={control}
        errors={errors}
        isRequired
        multiline
        minRows={3}
      />

      <LabeledInput
        type='location'
        control={control}
        errors={errors}
        isRequired
      />
    </Stack>
  );
};
