import { useState, useEffect } from 'react';
import { fetchEventById } from 'services/eventsAPI';
import { useParams } from 'react-router-dom';

export const useFetchEvents = () => {
  const { id } = useParams();
  const [event, setEvents] = useState(null);

  useEffect(() => {
    fetchEventById(id).then(setEvents);
  }, [id]);

  return event;
};
