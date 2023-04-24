import { useFetchEvents } from 'srcHooks/useFetchEvent';

export const EventsSubPage = () => {
  const event = useFetchEvents();
  return (
    <div>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
        </>
      )}
    </div>
  );
};
