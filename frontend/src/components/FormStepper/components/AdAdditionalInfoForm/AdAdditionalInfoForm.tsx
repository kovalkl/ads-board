import { forwardRef, useImperativeHandle, useRef } from 'react';

import { Auto } from '@/components/FormStepper/components/Auto/Auto';
import { RealEstate } from '@/components/FormStepper/components/RealEstate/RealEstate';
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

    useImperativeHandle(ref, () => ({
      submit: () => {
        if (type === 'real_estate') {
          return realEstateRef.current?.submit() ?? false;
        } else if (type === 'auto') {
          return autoRef.current?.submit() ?? false;
        }
        return false;
      },
    }));

    return (
      <Stack sx={{ maxWidth: '760px' }}>
        <Typography variant='h2'>Дополнительная информация</Typography>

        {type === 'real_estate' && (
          <RealEstate
            ref={realEstateRef}
            toggleStepValidity={toggleStepValidity}
          />
        )}
        {type === 'auto' && (
          <Auto ref={autoRef} toggleStepValidity={toggleStepValidity} />
        )}
      </Stack>
    );
  },
);
