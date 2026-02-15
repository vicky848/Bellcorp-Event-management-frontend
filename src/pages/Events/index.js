import { useEffect, useState } from "react";
import API from "../../services/api";
import EventCard from "../../components/EventCard";
import "./index.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await API.get(`/events?search=${search}`);
      setEvents(res.data);
    };

    fetchEvents();
  }, [search]);

  return (
    <div className="event-container">
      <input
        placeholder="Search events"
        onChange={(e) => setSearch(e.target.value)}
        className="event-input"
      />

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
