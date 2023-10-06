import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {},
  },
});

export const usersSliceActions = usersSlice.actions;

export default usersSlice.reducer;
