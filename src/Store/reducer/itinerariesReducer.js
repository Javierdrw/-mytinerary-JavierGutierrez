import { createReducer } from "@reduxjs/toolkit";
import {  getItinerariesCity, getItineraryId } from "../actions/itinerariesActions.js";

const initialState = {
    itineraries: [],
    loadingItinerary: false,
    errorItinerary: null,
};


export const itinerariesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getItinerariesCity.pending, (state) => {
            state.loadingItinerary = true;
        })
        .addCase(getItinerariesCity.fulfilled, (state, action) => {
            state.itineraries = action.payload;
            state.loadingItinerary = false;
        })
        .addCase(getItinerariesCity.rejected, (state, action) => {
            state.errorItinerary = action.error.message;
            state.loadingItinerary = false;
            state.itineraries = [];
        });
})
const initialStateItineraryId = {
    itineraryId: [],
    loadingItineraryId: false,
    errorItineraryId: null,

};

export const itineraryIdReducer = createReducer(initialStateItineraryId, (builder) => {
    builder
        .addCase(getItineraryId.pending, (state) => {
            state.loadingItineraryId = true;
        })
        .addCase(getItineraryId.fulfilled, (state, action) => {
            state.itineraryId = action.payload;
            state.loadingItineraryId = false;
        })
        .addCase(getItineraryId.rejected, (state, action) => {
            state.errorItineraryId = action.error.message;
            state.loadingItineraryId = false;
            state.itineraryId = [];
        });
})