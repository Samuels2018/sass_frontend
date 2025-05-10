import React from 'react';
import {router} from './routes/routes';
import {  RouterProvider, createBrowserRouter as Router} from 'react-router-dom';

const appRouter = Router(router);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
