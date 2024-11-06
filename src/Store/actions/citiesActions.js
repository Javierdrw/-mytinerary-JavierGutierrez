import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAction("SET_SEARCH");
export const getCities = createAsyncThunk("GET_CITIES", async (search) => {
    const response = await axios.get(`http://localhost:8080/api/city/all?name=${search}`);
    return response.data.response
})
export const getCityId = createAction("GET_CITY_ID");
export const getCity = createAsyncThunk("GET_CITY", async (id) => {
    const response = await axios.get(`http://localhost:8080/api/city/detail/${id}`);
    return response.data.response
})