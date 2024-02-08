import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App.tsx'
import Root from "./routes/root.tsx";
import ErrorPage from './error-page.tsx';
import { isFirstVisite } from './utils/vistiedWebSite.ts';
import NewPage from './routes/newPage.tsx';
import MapPage from './routes/MapPage.tsx';
import HostPage from './routes/HostPage.tsx';
import ProfilPage from './routes/ProfilPage.tsx';

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
    },
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/map',
        element: <MapPage />
      },
      {
        path: '/host',
        element: <HostPage />
      },
      {
        path: '/profil',
        element: <ProfilPage />
      }
      
    ]
  },
  {
    path: "/new",
    element: <NewPage />,
  }
]);

export default router;