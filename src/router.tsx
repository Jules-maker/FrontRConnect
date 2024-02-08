import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App.tsx'
import Root from "./routes/root.tsx";
import ErrorPage from './error-page.tsx';
import New from './routes/new.tsx';
import { isFirstVisite } from './utils/vistiedWebSite.ts';

// Add here the page to import and the route to use
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async () => {
      // check if it's the first visite
      if (isFirstVisite()) {
        return redirect('/new');
      }
      return null;
    }
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <New />,
  }
]);

export default router;