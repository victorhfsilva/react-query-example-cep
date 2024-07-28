import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cep from './pages/Cep';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cep/:cep" element={<Cep />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
