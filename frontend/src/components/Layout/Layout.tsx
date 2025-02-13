import { Outlet } from 'react-router';

import { Header } from '@/components/Header/Header';
import Box from '@mui/material/Box';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <Box
        component='main'
        sx={{
          flex: 1,
          margin: '2rem 0',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
