import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import About from '../Components/About';
import Login from '../Components/Auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <LandingPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

export default router;
