import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getItinerariesCity = createAsyncThunk("GET_ITINERARIES", async (id) => {
    const response = await axios.get(`http://localhost:8080/api/itinerary/city/${id}`);
    return response.data.response
});

export const getItineraryId = createAsyncThunk("GET_ITINERARY", async (id) => {
    const response = await axios.get(`http://localhost:8080/api/itinerary/detail/${id}`);
    return response.data.response
})