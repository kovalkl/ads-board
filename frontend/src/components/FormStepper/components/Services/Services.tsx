import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { SERVICES_TITLES } from '@/components/FormStepper/components/Services/constants';
import {
  ServicesValues,
  schemaServices,
} from '@/components/FormStepper/components/Services/schema';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setServicesInfo } from '@/store/slice/FormSlice';
import { serviceTypeArray } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';

type ServicesProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (isValid: boolean) => void;
};

export const Services = forwardRef(
  ({ toggleStepValidity }: ServicesProps, ref) => {
    const dispatch = useAppDispatch();

    const services = useAppSelector(
      (state) => state.form.additionalFields.services,
    );

    const {
      control,
      watch,
      formState: { errors, isValid },
    } = useForm<ServicesValues>({
      resolver: yupResolver(schemaServices),
      mode: 'onChange',
    });

    useEffect(() => {
      toggleStepValidity(isValid);
    }, [isValid, toggleStepValidity]);

    useImperativeHandle(ref, () => ({
      submit: () => {
        const formValues = watch();
        dispatch(setServicesInfo(formValues));
        return true;
      },
    }));

    return (
      <Stack>
        <LabeledSelect<ServicesValues>
          name='serviceType'
          control={control}
          errors={errors}
          titles={SERVICES_TITLES}
          isRequired
          options={serviceTypeArray}
          defaultValue={services?.serviceType}
        />

        <LabeledInput<ServicesValues>
          name='experience'
          control={control}
          errors={errors}
          titles={SERVICES_TITLES}
          isRequired
          defaultValue={services?.experience}
        />

        <LabeledInput<ServicesValues>
          name='cost'
          control={control}
          errors={errors}
          titles={SERVICES_TITLES}
          defaultValue={services?.cost}
          isRequired
        />

        <LabeledInput<ServicesValues>
          name='workSchedule'
          control={control}
          errors={errors}
          titles={SERVICES_TITLES}
          defaultValue={services?.workSchedule}
          isRequired={false}
        />
      </Stack>
    );
  },
);
