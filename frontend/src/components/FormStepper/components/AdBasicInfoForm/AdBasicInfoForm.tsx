import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { TITLES } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import {
  AdBasicInfoFormValues,
  schema,
} from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBaseInfo } from '@/store/slice/FormSlice';
import { BaseInfoType, ItemTypes } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { debounce } from 'lodash';

type AdBasicInfoFormProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (value: boolean) => void;
};

export const AdBasicInfoForm = ({
  toggleStepValidity,
}: AdBasicInfoFormProps) => {
  const dispatch = useAppDispatch();
  const { name, description, location, type } = useAppSelector(
    (state) => state.form,
  );

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<AdBasicInfoFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    toggleStepValidity(isValid);
  }, [isValid, toggleStepValidity]);

  const debouncedDispatch = debounce((formValues: AdBasicInfoFormValues) => {
    const baseInfo = {
      ...formValues,
      type: formValues.type as BaseInfoType['type'],
    };
    dispatch(setBaseInfo(baseInfo));
  }, 1000);

  const formValues = watch();

  useEffect(() => {
    debouncedDispatch(formValues);
  }, [formValues, debouncedDispatch]);

  return (
    <Stack sx={{ maxWidth: '760px' }}>
      <Typography variant='h2'>Общая информация</Typography>

      <LabeledSelect
        type='type'
        control={control}
        errors={errors}
        isRequired
        options={ItemTypes}
        defaultValue={type}
      />

      <LabeledInput<AdBasicInfoFormValues>
        name='name'
        titles={TITLES}
        control={control}
        errors={errors}
        defaultValue={name}
        isRequired
      />

      <LabeledInput<AdBasicInfoFormValues>
        name='description'
        titles={TITLES}
        control={control}
        errors={errors}
        defaultValue={description}
        isRequired
        multiline
        minRows={3}
      />

      <LabeledInput<AdBasicInfoFormValues>
        name='location'
        titles={TITLES}
        control={control}
        errors={errors}
        defaultValue={location}
        isRequired
      />
    </Stack>
  );
};
