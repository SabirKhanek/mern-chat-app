import { RouteObject } from 'react-router-dom';
import Login from './pages/login';

const routes: RouteObject[] = [{
    path: '/',
    element: <h1>Home</h1>,
}, {
    path: 'login',
    element: <Login />
}]

export default routes;