import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState();

  const startStoper = (e) => {
    e.preventDefault();
    console.log("Stoper start");
  };

  const stopStoper = (e) => {
    e.preventDefault();
    console.log("Stoper stop");
  };

  const resetStoper = (e) => {
    e.preventDefault();
    console.log("Stoper reset");
  };
  return (
    <Container>
      <Timer />
      <Button startStoper={startStoper}>Start</Button>
      <Button startStoper={stopStoper}>Stop</Button>
      <Button startStoper={resetStoper}>reset</Button>
    </Container>
  );
}

export default App;
