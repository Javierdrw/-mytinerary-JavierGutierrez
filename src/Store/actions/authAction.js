import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk(
  "auth/sagnIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("https://mytinerary-back-javiergutierrez.onrender.com/api/auth/signIn", credentials);
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      ); 
    }
  }
);


const validateToken = createAsyncThunk(
  "auth/validateToken",
  async (token, thunkAPI) => {
    try {
      
      const response = await axios.get("https://mytinerary-back-javiergutierrez.onrender.com/api/auth/validateToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
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
