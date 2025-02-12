import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Layout } from '@/components/Layout/Layout.tsx';
import { AdCard } from '@/pages/AdCard.tsx';
import { AdList } from '@/pages/AdList';
import { Form } from '@/pages/Form.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>,
);
