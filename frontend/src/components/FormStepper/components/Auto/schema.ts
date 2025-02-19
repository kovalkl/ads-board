import { AutoBrands } from '@/types/formTypes';
import * as yup from 'yup';

export interface AutoValues {
  brand: keyof typeof AutoBrands;
  model: string;
  year: number;
  mileage?: number;
}

export const schemaAuto = yup.object().shape({
  brand: yup
    .mixed<keyof typeof AutoBrands>()
    .oneOf(Object.keys(AutoBrands) as (keyof typeof AutoBrands)[])
    .required('Обязательное поле'),
  model: yup.string().required('Обязательное поле'),
  year: yup.number().typeError('Введите число').required('Обязательное поле'),
  mileage: yup.number().typeError('Введите число'),
});
