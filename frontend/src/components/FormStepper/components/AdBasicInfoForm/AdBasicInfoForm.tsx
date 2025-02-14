import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  AdBasicInfoFormValues,
  schema,
} from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { useAppDispatch } from '@/store/hooks';
import { setBaseInfo } from '@/store/slice/FormSlice';
import { ItemTypes } from '@/store/types';
import { BaseInfoType } from '@/store/types';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AdBasicInfoFormProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (value: boolean) => void;
};

export const AdBasicInfoForm = ({
  toggleStepValidity,
}: AdBasicInfoFormProps) => {
  const dispatch = useAppDispatch();

  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<AdBasicInfoFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    toggleStepValidity(isValid);
  }, [isValid, toggleStepValidity]);

  useEffect(() => {
    if (isValid) {
      const formValues = getValues();
      const baseInfo: BaseInfoType = {
        ...formValues,
        type: formValues.type as BaseInfoType['type'],
      };
      dispatch(setBaseInfo(baseInfo));
    }
  }, [dispatch, getValues, isValid]);

  return (
    <Stack sx={{ maxWidth: '760px' }}>
      <Typography variant='h2'>Общая информация</Typography>

      <LabeledSelect
        type='type'
        control={control}
        errors={errors}
        isRequired
        options={ItemTypes}
      />

      <LabeledInput type='name' control={control} errors={errors} isRequired />

      <LabeledInput
        type='description'
        control={control}
        errors={errors}
        isRequired
        multiline
        minRows={3}
      />

      <LabeledInput
        type='location'
        control={control}
        errors={errors}
        isRequired
      />
    </Stack>
  );
};
