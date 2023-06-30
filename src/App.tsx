import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import EventList from './pages/EventList';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/event-list",
    element: <EventList />,
  },
  {
    path: "/add-event",
    element: <AddEvent />,
  },
  {
    path: "/edit-event",
    element: <EditEvent />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;