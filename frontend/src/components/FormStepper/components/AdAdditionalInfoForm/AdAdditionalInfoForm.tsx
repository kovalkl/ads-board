import { Auto } from '@/components/FormStepper/components/Auto/Auto';
import { RealEstate } from '@/components/FormStepper/components/RealEstate/RealEstate';
import { useAppSelector } from '@/store/hooks';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AdAdditionalInfoForm = () => {
  const { type } = useAppSelector((state) => state.form);

  return (
    <Stack sx={{ maxWidth: '760px' }}>
      <Typography variant='h2'>Дополнительная информация</Typography>

      {type === 'real_estate' && <RealEstate />}
      {type === 'auto' && <Auto />}
    </Stack>
  );
};
