import App from './App';
import { Dashboard } from './Dashboard';
import { Login } from './Login';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      { path: 'login', element: <Login /> },
    ],
  },
];

export default routes;
