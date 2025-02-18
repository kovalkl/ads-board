import { PropertyTypes } from '@/types/formTypes';
import * as yup from 'yup';

export interface RealEstateValues {
  propertyType: keyof typeof PropertyTypes;
  area: number;
  rooms: number;
  price: number;
}

export const schemaRealEstate = yup.object().shape({
  propertyType: yup
    .mixed<keyof typeof PropertyTypes>()
    .oneOf(Object.keys(PropertyTypes) as (keyof typeof PropertyTypes)[])
    .required('Обязательное поле'),
  area: yup.number().typeError('Введите число').required('Обязательное поле'),
  rooms: yup.number().typeError('Введите число').required('Обязательное поле'),
  price: yup.number().typeError('Введите число').required('Обязательное поле'),
});
