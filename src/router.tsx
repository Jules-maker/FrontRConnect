import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import Root from "./routes/root.tsx";
import ErrorPage from './error-page.tsx';

// Add here the page to import and the route to use
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

export default router;