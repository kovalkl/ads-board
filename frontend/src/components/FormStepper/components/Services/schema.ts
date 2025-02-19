import { ServiceTypes } from '@/types/formTypes';
import * as yup from 'yup';

export interface ServicesValues {
  serviceType: keyof typeof ServiceTypes;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export const schemaServices = yup.object().shape({
  serviceType: yup
    .mixed<keyof typeof ServiceTypes>()
    .oneOf(Object.keys(ServiceTypes) as (keyof typeof ServiceTypes)[])
    .required('Обязательное поле'),
  experience: yup
    .number()
    .typeError('Введите число')
    .required('Обязательное поле'),
  cost: yup.number().typeError('Введите число').required('Обязательное поле'),
  workSchedule: yup.string(),
});
