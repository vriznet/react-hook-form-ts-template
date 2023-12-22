import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Text from './components/Text';
import Textarea from './components/Textarea';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: '/text', element: <Text /> },
      { path: '/textarea', element: <Textarea /> },
      // { path: '/select', element: <Select /> },
      // { path: '/checkbox', element: <Checkbox /> },
      // { path: '/radio', element: <Radio /> },
      // { path: '/range', element: <Range /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
