import { AutoBrandType, autoBrandArray } from '@/types/formTypes';
import * as yup from 'yup';

export interface AutoValues {
  brand: AutoBrandType;
  model: string;
  year: number;
  mileage?: number;
}

export const schemaAuto = yup.object().shape({
  brand: yup
    .mixed<AutoBrandType>()
    .oneOf(autoBrandArray)
    .required('Обязательное поле'),
  model: yup.string().required('Обязательное поле'),
  year: yup.number().typeError('Введите число').required('Обязательное поле'),
  mileage: yup.number().typeError('Введите число'),
});
