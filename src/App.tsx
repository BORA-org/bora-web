import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import { EventList } from './pages/EventList';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';

import ProtectRoute from './services/ProtectRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/event-list",
    element:
      <ProtectRoute>
        <EventList />
      </ProtectRoute>,
  },
  {
    path: "/add-event",
    element:
      <ProtectRoute>
        <AddEvent />
      </ProtectRoute>,
  },
  {
    path: "/edit-event",
    element:
      <ProtectRoute>
        <EditEvent />
      </ProtectRoute>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;