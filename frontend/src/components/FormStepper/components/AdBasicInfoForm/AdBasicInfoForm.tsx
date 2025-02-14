import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  AdBasicInfoFormValues,
  schema,
} from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBaseInfo } from '@/store/slice/FormSlice';
import { ItemTypes } from '@/store/types';
import { BaseInfoType } from '@/store/types';
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

      <LabeledInput
        type='name'
        control={control}
        errors={errors}
        defaultValue={name}
        isRequired
      />

      <LabeledInput
        type='description'
        control={control}
        errors={errors}
        defaultValue={description}
        isRequired
        multiline
        minRows={3}
      />

      <LabeledInput
        type='location'
        control={control}
        errors={errors}
        defaultValue={location}
        isRequired
      />
    </Stack>
  );
};
