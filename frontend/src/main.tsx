import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Layout } from '@/components/Layout/Layout.tsx';
import '@/index.sass';
import { AdCard } from '@/pages/AdCard.tsx';
import { AdList } from '@/pages/AdList';
import { Form } from '@/pages/Form.tsx';
import store from '@/store';
import { theme } from '@/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Navigate to='list' replace />} />
              <Route path='form' element={<Form />} />
              <Route path='list' element={<AdList />} />
              <Route path='item:id' element={<AdCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
