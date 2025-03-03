import { ElementType, forwardRef, useImperativeHandle, useRef } from 'react';

import { Auto } from '@/components/FormStepper/components/Auto/Auto';
import { RealEstate } from '@/components/FormStepper/components/RealEstate/RealEstate';
import { Services } from '@/components/FormStepper/components/Services/Services';
import { useAppSelector } from '@/store/hooks';
import { InitialStateType } from '@/store/slice/FormSlice';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AdType = Exclude<InitialStateType['type'], ''>;

type AdAdditionalInfoFormProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (isValid: boolean) => void;
};

const COMPONENTS: Record<AdType, ElementType> = {
  Недвижимость: RealEstate,
  Авто: Auto,
  Услуги: Services,
};

export const AdAdditionalInfoForm = forwardRef(
  ({ toggleStepValidity }: AdAdditionalInfoFormProps, ref) => {
    const { type } = useAppSelector((state) => state.form) as { type: AdType };

    const refs: Record<AdType, React.RefObject<{ submit: () => boolean }>> = {
      Недвижимость: useRef<{ submit: () => boolean }>(null!),
      Авто: useRef<{ submit: () => boolean }>(null!),
      Услуги: useRef<{ submit: () => boolean }>(null!),
    };

    useImperativeHandle(ref, () => ({
      submit: () => refs[type]?.current?.submit() ?? false,
    }));

    const Component = COMPONENTS[type];

    return (
      <Stack sx={{ maxWidth: '760px' }}>
        <Typography variant='h2'>Дополнительная информация</Typography>
        {Component && (
          <Component ref={refs[type]} toggleStepValidity={toggleStepValidity} />
        )}
      </Stack>
    );
  },
);
