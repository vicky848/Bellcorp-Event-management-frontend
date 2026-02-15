import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    API.get(`/events/${id}`).then((res) => setEvent(res.data));
  }, [id]);

  const register = async () => {
    await API.post("/events/register", { eventId: id });
    alert("Registered!");
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Seats Left: {event.available_seats}</p>
      <button onClick={register}>Register</button>
    </div>
  );
}
