// import { useEffect } from "react";

// function Timer() {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       console.log("Cleanup done");
//     };
//   }, []);

//   return <h1>Timer Running</h1>;
// }

// export default Timer;


// learn redus toolkit 

// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;