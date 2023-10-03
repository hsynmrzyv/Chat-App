import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
