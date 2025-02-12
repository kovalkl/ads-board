import { Outlet } from 'react-router';

import { Header } from '@/components/Header/Header';
import Box from '@mui/material/Box';

export const Layout = () => {
  return (
    <>
      <Header />
      <Box component='main' sx={{ margin: '2rem 0', width: '100%' }}>
        <Outlet />
      </Box>
    </>
  );
};
