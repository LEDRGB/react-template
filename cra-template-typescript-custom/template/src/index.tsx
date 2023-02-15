import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@stryberventures/gaia-react.theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './screens/Page404';
import { Toaster } from 'react-hot-toast';
import Home from './screens/Home';
import Calls from './screens/Calls';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './styles/theme';

const getRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/calls',
          element: <Calls />,
        }
      ],
    },
  ]);
export const queryClient = new QueryClient();
export const App = () => {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <Toaster position="top-right" />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
