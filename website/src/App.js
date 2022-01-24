import React, { Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { NavbarProvider } from './context/NavbarContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import GlobalStyle from './style/GlobalStyle';
const Docs = React.lazy(() => import('./components/Docs'));
const Page404 = React.lazy(() => import('./components/Page404'));

function App() {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <NavbarProvider>
        <BrowserRouter>
          <Navbar />
          <Suspense
            fallback={
              <div>
                Loading...
              </div>
            }
          >
            <Routes>
              <Route
                exact
                path="/"
                element={<Docs />}
              />
              <Route
                exact
                path="*"
                element={<Page404 />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </NavbarProvider>
    </ErrorBoundary >
  );
}

export default App;
