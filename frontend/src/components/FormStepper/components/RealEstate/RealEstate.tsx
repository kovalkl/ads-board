import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

import { LabeledInput } from '@/components/FormStepper/components/LabeledInput/LabeledInput';
import { LabeledSelect } from '@/components/FormStepper/components/LabeledSelect/LabeledSelect';
import { REAL_ESTATE_TITLES } from '@/components/FormStepper/components/RealEstate/constants';
import {
  RealEstateValues,
  schemaRealEstate,
} from '@/components/FormStepper/components/RealEstate/schema';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRealEstateInfo } from '@/store/slice/FormSlice';
import { propertyTypeArray } from '@/types/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';

type RealEstateProps = {
  // eslint-disable-next-line no-unused-vars
  toggleStepValidity: (isValid: boolean) => void;
};

export const RealEstate = forwardRef(
  ({ toggleStepValidity }: RealEstateProps, ref) => {
    const dispatch = useAppDispatch();

    const realEstate = useAppSelector(
      (state) => state.form.additionalFields.realEstate,
    );

    const {
      control,
      watch,
      formState: { errors, isValid },
    } = useForm<RealEstateValues>({
      resolver: yupResolver(schemaRealEstate),
      mode: 'onChange',
    });

    useEffect(() => {
      toggleStepValidity(isValid);
    }, [isValid, toggleStepValidity]);

    useImperativeHandle(ref, () => ({
      submit: () => {
        const formValues = watch();
        dispatch(setRealEstateInfo(formValues));
        return true;
      },
    }));

    return (
      <Stack>
        <LabeledSelect<RealEstateValues>
          name='propertyType'
          control={control}
          errors={errors}
          titles={REAL_ESTATE_TITLES}
          isRequired
          options={propertyTypeArray}
          defaultValue={realEstate?.propertyType}
        />

        <LabeledInput<RealEstateValues>
          name='area'
          control={control}
          errors={errors}
          titles={REAL_ESTATE_TITLES}
          isRequired
          defaultValue={realEstate?.area}
        />

        <LabeledInput<RealEstateValues>
          name='rooms'
          control={control}
          errors={errors}
          titles={REAL_ESTATE_TITLES}
          defaultValue={realEstate?.rooms}
          isRequired
        />

        <LabeledInput<RealEstateValues>
          name='price'
          control={control}
          errors={errors}
          titles={REAL_ESTATE_TITLES}
          defaultValue={realEstate?.price}
          isRequired
        />
      </Stack>
    );
  },
);
