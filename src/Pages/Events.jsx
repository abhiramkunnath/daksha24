import React, { useState, useEffect } from "react";

import Spinner from "../Components/Spinner";
import "./Events.scss";

function Events() {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyGujyOWsqlnFyJGPzIvICGVBLW1yqp99YDkTsb_7a2575PG--75PYZdAD00T0ziwyM/exec?type=events"
    )
      .then((response) => response.json())
      .then((data) => {
        setEventData(data.data);
        setIsLoading(false);
      })
      .catch((error) => window.alert("Loading Failed"));
  }, []);

  return (
    <>
      <div className="title--box">
        <h1>Events</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="event_box">
          {eventData.map((row, index) => (
            <div className="event_card" key={index}>
              <span className="eventName">{row.EventName}</span>
              <span className="eventState" data-state={row.EventState}>{row.EventState}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Events;
