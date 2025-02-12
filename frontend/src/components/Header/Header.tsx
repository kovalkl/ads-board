import { PATH } from '@/constants/paths';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Container>
        <Link
          href={PATH.LIST}
          underline='none'
          color='textPrimary'
          fontSize='1.4rem'
        >
          Домой
        </Link>
      </Container>
    </AppBar>
  );
};
