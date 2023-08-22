import { RouteObject } from 'react-router-dom';
import Login from './pages/login';
import { AuthUi } from './components/auth-ui';
import Register from './pages/register/register';
import LandingPage from './pages/landing';

const routes: RouteObject[] = [{
    path: '/',
    element: <LandingPage />,

},
{
    element: <AuthUi />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        }
    ]
}]

export default routes;