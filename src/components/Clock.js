import { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // console.log("The clock started");

    const interval = setInterval(() => {
      // console.log("The interval is working");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      // console.log("The interval stopped");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // console.log("The clock is working");
  })

  return (
    <p className="clock">
      {time}{" "}
      <span className="close-button" onClick={() => props.setShowClock(false)}>
        x
      </span>
    </p>
  );
};


export default Clock
