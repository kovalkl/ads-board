import { TYPE_OPTIONS } from '@/components/FormStepper/components/AdBasicInfoForm/constants';
import * as yup from 'yup';

export interface AdBasicInfoFormValues {
  type: string;
  name: string;
  description: string;
  location: string;
}

export const schema = yup.object<AdBasicInfoFormValues>().shape({
  type: yup.string().oneOf(TYPE_OPTIONS).required('Обязательное поле'),
  name: yup.string().required('Обязательное поле'),
  description: yup.string().required('Обязательное поле'),
  location: yup.string().required('Обязательное поле'),
});
