import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk(
  "auth/sagnIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials);
      return response.data; // En caso de éxito
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      ); // En caso de error
    }
  }
);

// Acción para validar un token de forma asincrónica
const validateToken = createAsyncThunk(
  "auth/validateToken",
  async (token, thunkAPI) => {
    try {
      // Hacer solicitud GET para validar el token
      const response = await axios.get("http://localhost:8080/api/auth/validateToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Devolver la respuesta en caso de éxito
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("UserItinerary");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Token validation failed"
      );
    }
  }
);

const setUser = createAction("SET_USER", (data) => {
  return{
    payload: data,
  }
});


export { login, validateToken, setUser }; 
