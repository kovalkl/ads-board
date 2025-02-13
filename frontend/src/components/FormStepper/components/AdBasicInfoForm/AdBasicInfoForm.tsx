import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const TYPE_OPTIONS = ['Недвижимость', 'Авто', 'Услуги'];

export const AdBasicInfoForm = () => {
  return (
    <Stack sx={{ maxWidth: '760px' }}>
      <Typography variant='h2'>Общая информация</Typography>

      <LabeledSelect label='Категория' isRequired options={TYPE_OPTIONS} />

      <LabeledInput label='Название' isRequired />

      <LabeledInput label='Описание' isRequired multiline minRows={3} />

      <LabeledInput label='Локация' isRequired />
    </Stack>
  );
};
