import { ItemTypes } from '@/types/formTypes';
import * as yup from 'yup';

export interface AdBasicInfoFormValues {
  type: keyof typeof ItemTypes;
  name: string;
  description: string;
  location: string;
}

export const schema = yup.object().shape({
  type: yup
    .mixed<keyof typeof ItemTypes>()
    .oneOf(Object.keys(ItemTypes) as (keyof typeof ItemTypes)[])
    .required('Обязательное поле'),
  name: yup.string().required('Обязательное поле'),
  description: yup.string().required('Обязательное поле'),
  location: yup.string().required('Обязательное поле'),
});
