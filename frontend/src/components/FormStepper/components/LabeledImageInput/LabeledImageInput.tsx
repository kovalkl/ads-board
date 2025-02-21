import { ReactNode, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import { truncateFileName } from '@/components/FormStepper/components/LabeledImageInput/truncateFileName';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';

import styles from '@/components/FormStepper/components/LabeledImageInput/LabeledImageInput.module.sass';

type LabeledImageInputProps<T extends FieldValues> = {
  name: Path<T>;
  isRequired: boolean;
  control: Control<T>;
  titles: Record<Path<T>, string>;
  errors: FieldErrors<T>;
  defaultValue?: string;
};

export const LabeledImageInput = <T extends FieldValues>({
  name,
  isRequired,
  control,
  titles,
  errors,
  defaultValue,
}: LabeledImageInputProps<T>) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field: { onChange, onBlur, ref } }) => (
        <FormControl>
          <Typography variant='body1'>
            {`${titles[name]} `}
            {isRequired && (
              <Typography component='span' variant='caption'>
                *
              </Typography>
            )}
          </Typography>
          <label htmlFor='imageInput' className={styles.imageInput__label}>
            +
          </label>
          <input
            id='imageInput'
            className={styles.imageInput__input}
            type='file'
            accept='image/png, image/jpeg'
            ref={ref}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                setFileName(truncateFileName(file.name));
                onChange(file);
              }
            }}
            onBlur={onBlur}
          />
          {fileName && (
            <Typography className={styles.imageInput__fileName}>
              {fileName}
            </Typography>
          )}
          <FormHelperText>
            {(errors[name]?.message as ReactNode) || ' '}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
