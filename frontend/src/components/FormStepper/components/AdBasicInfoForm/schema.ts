import { AdsType, adTypeArray } from '@/types/formTypes';
import * as yup from 'yup';

export interface AdBasicInfoFormValues {
  type: AdsType;
  name: string;
  description: string;
  location: string;
  image?: File;
}

const MAX_FILE_SIZE_BYTES = 2097152;

export const schema = yup.object().shape({
  type: yup.mixed<AdsType>().oneOf(adTypeArray).required('Обязательное поле'),
  name: yup.string().required('Обязательное поле'),
  description: yup.string().required('Обязательное поле'),
  location: yup.string().required('Обязательное поле'),
  image: yup
    .mixed<File>()
    .test('fileSize', 'File must be 2 MB or smaller', (value) =>
      value ? value.size <= MAX_FILE_SIZE_BYTES : true,
    )
    .test('fileType', 'Unsupported file format', (value) =>
      value ? ['image/jpeg', 'image/png'].includes(value.type) : true,
    )
    .test('fileExtension', 'Only JPEG(JPG) and PNG formats', (value) => {
      if (value) {
        const fileExtension = value.name.split('.').pop()?.toLowerCase();
        return ['jpeg', 'jpg', 'png'].includes(fileExtension || '');
      }
      return true;
    }),
});
