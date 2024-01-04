let ClockTime = () => {
  let time = new Date();
  return (
    <h2>
      This the current time: <br /> {time.toLocaleDateString()}
      <br />
      {time.toLocaleTimeString()}
    </h2>
  );
};

export default ClockTime;
