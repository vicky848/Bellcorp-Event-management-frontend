import { Link } from "react-router-dom";
import "./index.css";

const EventCard = ({ event }) => {
  return (
    <div className="card-container">
      <div className="event-card">
        <h3>{event.name}</h3>
        <p>{event.location}</p>
        <p>{event.date_time}</p>
       <div className="button-container">
         <Link to={`/events/${event.id}`} className="btn btn-dark">View Details</Link>
       </div>
      </div>
    </div>
  );
};

export default EventCard;
