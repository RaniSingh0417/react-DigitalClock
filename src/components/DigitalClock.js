import { useState } from "react";

const Digitalclock = () => {
  const [currtime, setCurrtime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <div className="dig-clock">
        <h1>{currtime}</h1>
      </div>
    </>
  );
};
export default Digitalclock;
