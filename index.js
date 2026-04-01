import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup done");
    };
  }, []);

  return <h1>Timer Running</h1>;
}

export default Timer;