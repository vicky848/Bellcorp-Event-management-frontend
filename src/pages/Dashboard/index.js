import { useEffect, useState } from "react";
import API from "../../services/api";
import "./index.css";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const fetchMyEvents = async () => {
    const res = await API.get("/users/my-events");
    setEvents(res.data);
  };

  const cancelEvent = async (eventId) => {
    try {
      await API.delete(`/events/cancel/${eventId}`);
      alert("Registration cancelled");

      // Refresh list after cancel
      fetchMyEvents();
    } catch (err) {
      alert("Error cancelling registration");
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="register-heading">My Registered Events</h2>

      {events.length === 0 ? (
        <p>No registered events</p>
      ) : (
        events.map((e) => (
          <div className="list-container" key={e.id}>
            <h4>{e.name}</h4>
            <p>{e.date_time}</p>

            <button className="btn btn-warning" onClick={() => cancelEvent(e.id)}>
              Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
}
