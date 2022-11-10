import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Clock = () => {
  const [timeState, setTimeState] = useState();
  const [dateState, setDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      // for time
      const timeStamp = new Date();
      setTimeState(timeStamp.toLocaleTimeString());
      // for date
      const dateStamp = new Date();
      setDateState(dateStamp.toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <>
      <WindowsClock>
        <div>{timeState}</div>
        <div>{dateState}</div>
      </WindowsClock>
    </>
  );
};

const WindowsClock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  div {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    margin: 0.3vh 0;
  }
`;

export default Clock;
