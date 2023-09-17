import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userData = createAsyncThunk(
  "user/userData",

  async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        console.log(state.data);
      })
      .addCase(userData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
