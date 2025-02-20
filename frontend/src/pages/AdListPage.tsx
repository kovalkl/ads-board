import { Link } from 'react-router';

import { AdList } from '@/components/AdList/AdList';
import { PATH } from '@/constants/paths';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AdListPage = () => {
  return (
    <Container>
      <Stack gap={2} alignItems='flex-start'>
        <Typography variant='h1'>Мои объявления</Typography>
        <Stack direction='row' justifyContent='flex-end' width='100%'>
          <Link to={`/${PATH.FORM}`}>
            <Button sx={{ alignSelf: 'flex-end' }}>
              Разместить объявление
            </Button>
          </Link>
        </Stack>
        <AdList />
      </Stack>
    </Container>
  );
};
