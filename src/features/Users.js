import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Data/fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      //     write code for adding a user
      state.value.push(action.payload);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
