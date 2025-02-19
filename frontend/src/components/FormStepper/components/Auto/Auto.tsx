import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

import { AUTO_TITLES } from '@/components/FormStepper/components/Auto/constants';
import {
  AutoValues,
  schemaAuto,
} from '@/components/FormStepper/components/Auto/schema';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAutoInfo } from '@/store/slice/FormSlice';
import { AutoBrands } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';

type AutoProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (isValid: boolean) => void;
};

export const Auto = forwardRef(({ toggleStepValidity }: AutoProps, ref) => {
  const dispatch = useAppDispatch();

  const auto = useAppSelector((state) => state.form.additionalFields.auto);

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<AutoValues>({
    resolver: yupResolver(schemaAuto),
    mode: 'onChange',
  });

  useEffect(() => {
    toggleStepValidity(isValid);
  }, [isValid, toggleStepValidity]);

  useImperativeHandle(ref, () => ({
    submit: () => {
      const formValues = watch();
      dispatch(setAutoInfo(formValues));
      return true;
    },
  }));

  return (
    <Stack>
      <LabeledSelect<AutoValues>
        name='brand'
        control={control}
        errors={errors}
        titles={AUTO_TITLES}
        isRequired
        options={AutoBrands}
        defaultValue={auto?.brand}
      />

      <LabeledInput<AutoValues>
        name='model'
        control={control}
        errors={errors}
        titles={AUTO_TITLES}
        isRequired
        defaultValue={auto?.model}
      />

      <LabeledInput<AutoValues>
        name='year'
        control={control}
        errors={errors}
        titles={AUTO_TITLES}
        defaultValue={auto?.year}
        isRequired
      />

      <LabeledInput<AutoValues>
        name='mileage'
        control={control}
        errors={errors}
        titles={AUTO_TITLES}
        defaultValue={auto?.mileage}
        isRequired={false}
      />
    </Stack>
  );
});
