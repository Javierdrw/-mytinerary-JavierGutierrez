import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getItinerariesCity = createAsyncThunk("GET_ITINERARIES", async (id) => {
    const response = await axios.get(`https://mytinerary-back-javiergutierrez.onrender.com/api/itinerary/city/${id}`);
    return response.data.response
});

export const getItineraryId = createAsyncThunk("GET_ITINERARY", async (id) => {
    const response = await axios.get(`https://mytinerary-back-javiergutierrez.onrender.com/api/itinerary/detail/${id}`);
    return response.data.response
})