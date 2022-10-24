import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Anish Chaudhary" },
  { id: "1", name: "Sabin Shrestha" },
  { id: "2", name: "Panchu Ch" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) =>state.users;

export default usersSlice.reducer;
