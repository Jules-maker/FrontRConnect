import { createBrowserRouter, redirect } from 'react-router-dom';

// Pages
import ErrorPage from './error-page.tsx';
import Layout from './routes/layout.tsx';

import NewPage from './routes/NewPage/index.tsx';
import HomePage from './routes/HomePage.tsx';
import MapPage from './routes/MapPage/index.tsx';
import HostPage from './routes/HostPage/index.tsx';
import ProfilPage from './routes/ProfilPage/index.tsx';

// Utils
import { isFirstVisite } from './utils/vistiedWebSite.ts';
import cardsList from './data.ts';

// Add here the page to import and the route to use
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: <HomePage />,
        loader: async()=> {
          return {
            cardsList: cardsList
          }
        }
      },
      {
        path: '/map',
        element: <MapPage />
      },
      {
        path: '/host',
        element: <HostPage />,
        loader: async()=>{
          return {
            cardsList:cardsList
          }
        }
      },
      // {
      //   path: '/host/:id',
      //   element: <HostPage />,
      //   loader: async({params})=>{
      //     const {id} =params;
      //     return {
      //       id
      //     }
      //   }
      // },
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