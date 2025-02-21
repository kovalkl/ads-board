import { useCallback, useRef, useState } from 'react';

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

  const [validSteps, setValidSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const basicInfoFormRef = useRef<{ submit: () => boolean } | null>(null);
  const additionalInfoFormRef = useRef<{ submit: () => boolean } | null>(null);

  const handleNext = () => {
    if (activeStep === 0) {
      if (basicInfoFormRef.current?.submit()) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    if (activeStep === steps.length - 1) {
      if (additionalInfoFormRef.current?.submit()) {
        console.log('finish');
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const toggleStepValidity = useCallback(
    (isValid: boolean) => {
      setValidSteps((prevValidSteps) =>
        isValid
          ? [...prevValidSteps, activeStep]
          : prevValidSteps.filter((step) => step !== activeStep),
      );
    },
    [activeStep],
  );

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
        {activeStep === 0 && (
          <AdBasicInfoForm
            toggleStepValidity={toggleStepValidity}
            ref={basicInfoFormRef}
          />
        )}
        {activeStep === 1 && (
          <AdAdditionalInfoForm
            ref={additionalInfoFormRef}
            toggleStepValidity={toggleStepValidity}
          />
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', pb: 2 }}>
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Назад
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button
            onClick={handleNext}
            disabled={!validSteps.includes(activeStep)}
          >
            {activeStep === steps.length - 1 ? finishButtonLabel : 'Далее'}
          </Button>
        </Box>
      </>
    </Stack>
  );
};
