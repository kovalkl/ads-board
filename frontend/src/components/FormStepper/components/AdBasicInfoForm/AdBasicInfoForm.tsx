import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

import { TITLES } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import { convertFileToBase64 } from '@/components/FormStepper/components/AdBasicInfoForm/convertFileToBase64';
import {
  AdBasicInfoFormValues,
  schema,
} from '@/components/FormStepper/components/AdBasicInfoForm/schema';
import { LabeledImageInput } from '@/components/FormStepper/components/LabeledImageInput/LabeledImageInput';
import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBaseInfo } from '@/store/slice/FormSlice';
import { ItemTypes } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AdBasicInfoFormProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (value: boolean) => void;
};

export const AdBasicInfoForm = forwardRef(
  ({ toggleStepValidity }: AdBasicInfoFormProps, ref) => {
    const dispatch = useAppDispatch();
    const { name, description, location, type, image } = useAppSelector(
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

    useImperativeHandle(ref, () => ({
      submit: async () => {
        const formValues = watch();
        const baseInfo = {
          ...formValues,
          image: formValues.image
            ? await convertFileToBase64(formValues.image)
            : undefined,
        };
        dispatch(setBaseInfo(baseInfo));
        return true;
      },
    }));

    return (
      <Stack sx={{ maxWidth: '760px' }}>
        <Typography variant='h2'>Общая информация</Typography>

        <LabeledSelect<AdBasicInfoFormValues>
          name='type'
          control={control}
          errors={errors}
          isRequired
          titles={TITLES}
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

        <LabeledImageInput
          name='image'
          titles={TITLES}
          control={control}
          errors={errors}
          isRequired={false}
          defaultValue={image}
        />
      </Stack>
    );
  },
);
