import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Layout } from '@/components/Layout/Layout.tsx';
import { PATH } from '@/constants/paths';
import { AdCardPage } from '@/pages/AdCardPage';
import { AdListPage } from '@/pages/AdListPage';
import { FormPage } from '@/pages/FormPage';
import store from '@/store';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/index.sass';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Navigate to='list' replace />} />
                <Route path={PATH.FORM} element={<FormPage />} />
                <Route path={PATH.LIST} element={<AdListPage />} />
                <Route path={`${PATH.ITEM}:id`} element={<AdCardPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
