import { forwardRef, useImperativeHandle, useRef } from 'react';

import { Auto } from '@/components/FormStepper/components/Auto/Auto';
import { RealEstate } from '@/components/FormStepper/components/RealEstate/RealEstate';
import { Services } from '@/components/FormStepper/components/Services/Services';
import { useAppSelector } from '@/store/hooks';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AdAdditionalInfoFormProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (isValid: boolean) => void;
};

export const AdAdditionalInfoForm = forwardRef(
  ({ toggleStepValidity }: AdAdditionalInfoFormProps, ref) => {
    const { type } = useAppSelector((state) => state.form);

    const realEstateRef = useRef<{ submit: () => boolean } | null>(null);
    const autoRef = useRef<{ submit: () => boolean } | null>(null);
    const servicesRef = useRef<{ submit: () => boolean } | null>(null);

    useImperativeHandle(ref, () => ({
      submit: () => {
        if (type === 'Недвижимость') {
          return realEstateRef.current?.submit() ?? false;
        } else if (type === 'Авто') {
          return autoRef.current?.submit() ?? false;
        } else if (type === 'Услуги') {
          return servicesRef.current?.submit() ?? false;
        }
        return false;
      },
    }));

    return (
      <Stack sx={{ maxWidth: '760px' }}>
        <Typography variant='h2'>Дополнительная информация</Typography>

        {type === 'Недвижимость' && (
          <RealEstate
            ref={realEstateRef}
            toggleStepValidity={toggleStepValidity}
          />
        )}
        {type === 'Авто' && (
          <Auto ref={autoRef} toggleStepValidity={toggleStepValidity} />
        )}
        {type === 'Услуги' && (
          <Services ref={servicesRef} toggleStepValidity={toggleStepValidity} />
        )}
      </Stack>
    );
  },
);
