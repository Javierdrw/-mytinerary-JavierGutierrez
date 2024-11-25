import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, validateToken } from "../actions/authAction.js";

const initialState = {
    loading: false,
    error: false,
    user: null,
    token: null
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(login.pending, (state) => {
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred"; // `action.payload` contiene el mensaje del error
        state.user = null;
        state.token = null;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(validateToken.pending, (state) => {
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(validateToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred"; // `action.payload` contiene el mensaje del error
        state.user = null;
        state.token = null;
      })
    .addCase(setUser, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
    })
      
});

export default authReducer