import { PropertyType, propertyTypeArray } from '@/types/formTypes';
import * as yup from 'yup';

export interface RealEstateValues {
  propertyType: PropertyType;
  area: number;
  rooms: number;
  price: number;
}

export const schemaRealEstate = yup.object().shape({
  propertyType: yup
    .mixed<PropertyType>()
    .oneOf(propertyTypeArray)
    .required('Обязательное поле'),
  area: yup.number().typeError('Введите число').required('Обязательное поле'),
  rooms: yup.number().typeError('Введите число').required('Обязательное поле'),
  price: yup.number().typeError('Введите число').required('Обязательное поле'),
});
