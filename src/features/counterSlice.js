import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async () => {
//     const response = await fetch("https://api.example.com/data");
//     const json = await response.json();
//     return json;
//   }
// );

function increment(state) {
  state.value += 1;
}

function decrement(state) {
  state.value -= 1;
}

function incrementByAmount(state, action) {
  state.value += action.payload;
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
    incrementByAmount,
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const {
  increment: incrementAction,
  decrement: decrementAction,
  incrementByAmount: incrementActionAction,
} = counterSlice.actions;

export default counterSlice.reducer;
