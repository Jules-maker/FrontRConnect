# R connect
Made with React and Tailwind

## Installation
```bash
npm install
```

## Usage
```bash
npm run dev
```

### Router
For routing, we used [react-router-dom](https://reactrouter.com/en/6.22.0)
All is already set up, you just need to add your components page in the `src/routes` folder and add the route in the `src/router.tsx` file.

```ts
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
```

### Tailwind
For styling, we used [Tailwind CSS](https://tailwindcss.com/)

3 colors are already set up in the `tailwind.config.js` file. You can add more colors if you want.

```ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {
          dark: '#232323',
          DEFAULT: '#232323',
          light: '#FFFDF9',
        },
        'secondary': {
          dark:'#D9D18C',
          DEFAULT: '#D9D18C',
          light: '#D9D18C',
        },
        'tertiary': {
          dark:'#FFFDF9',
          DEFAULT: '#FFFDF9',
          light: '#232323',
      }
    }
  },
  variants: {},
  plugins: [],
}
}
```

