import { fetchEvents } from 'services/eventsAPI';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{name}</Link>;
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
