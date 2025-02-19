import { useEffect } from 'react';
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
import { AutoBrands, AutoType } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import { debounce } from 'lodash';

export const Auto = () => {
  const dispatch = useAppDispatch();

  const auto = useAppSelector((state) => state.form.additionalFields.auto);

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<AutoValues>({
    resolver: yupResolver(schemaAuto),
    mode: 'onChange',
  });

  const debouncedDispatch = debounce((formValues: AutoValues) => {
    const realEstateInfo = {
      ...formValues,
      brand: formValues.brand as AutoType['brand'],
    };
    dispatch(setAutoInfo(realEstateInfo));
  }, 1000);

  const formValues = watch();

  useEffect(() => {
    debouncedDispatch(formValues);
  }, [formValues, debouncedDispatch]);

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
};
