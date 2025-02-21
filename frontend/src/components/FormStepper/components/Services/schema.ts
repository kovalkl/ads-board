import { ServiceTypeType, serviceTypeArray } from '@/types/formTypes';
import * as yup from 'yup';

export interface ServicesValues {
  serviceType: ServiceTypeType;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export const schemaServices = yup.object().shape({
  serviceType: yup
    .mixed<ServiceTypeType>()
    .oneOf(serviceTypeArray)
    .required('Обязательное поле'),
  experience: yup
    .number()
    .typeError('Введите число')
    .required('Обязательное поле'),
  cost: yup.number().typeError('Введите число').required('Обязательное поле'),
  workSchedule: yup.string(),
});
