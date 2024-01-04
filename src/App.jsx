import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockTag from "./components/ClockTag";
import ClockTime from "./components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockTime></ClockTime>
      <ClockTag></ClockTag>
    </center>
  );
}

export default App;
