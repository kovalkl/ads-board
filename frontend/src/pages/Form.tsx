import { useLocation } from 'react-router';

import { FormStepper } from '@/components/FormStepper/FormStepper';
import { FORM_STATE } from '@/constants/paths';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Form = () => {
  const location = useLocation();

  const title =
    location.state === FORM_STATE.EDIT_FORM
      ? 'Редактирование объявления'
      : 'Размещение объявления';

  return (
    <Container>
      <Typography variant='h1'>{title}</Typography>
      <FormStepper />
    </Container>
  );
};
