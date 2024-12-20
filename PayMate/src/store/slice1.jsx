import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice1",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
