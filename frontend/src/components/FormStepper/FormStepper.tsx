import { useState } from 'react';

import { AdAdditionalInfoForm } from '@/components/FormStepper/components/AdAdditionalInfoForm/AdAdditionalInfoForm';
import { AdBasicInfoForm } from '@/components/FormStepper/components/AdBasicInfoForm/AdBasicInfoForm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

const steps = ['Общая информация', 'Дополнительная информация'];

type FormStepperProps = {
  isNewAd?: boolean;
};

export const FormStepper = ({ isNewAd = true }: FormStepperProps) => {
  const finishButtonLabel = isNewAd ? 'Разместить' : 'Сохранить';

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack gap={2} sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === 0 && <AdBasicInfoForm />}
        {activeStep === 1 && <AdAdditionalInfoForm />}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Назад
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? finishButtonLabel : 'Далее'}
          </Button>
        </Box>
      </>
    </Stack>
  );
};
