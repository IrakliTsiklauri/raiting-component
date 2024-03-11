import Container from "./components/RatePage";

import ResultContainer from "./components/ResultPage";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(null);
  console.log(rate);

  return (
    <>
      {submit ? (
        <ResultContainer rate={rate} />
      ) : (
        <Container setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
