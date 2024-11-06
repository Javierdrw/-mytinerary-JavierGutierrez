import { createReducer } from "@reduxjs/toolkit";
import { setSearch, getCities, getCity } from "../actions/citiesActions.js";

const initialState = {
  cities: [],
  search: "",
  loading: false,
  error: null,
};

export const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearch, (state, action) => {
      state.search = action.payload;
    })
    .addCase(getCities.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.loading = false;
    })
    .addCase(getCities.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
});

const initialStateCity = {
  city: null, 
  loadingCity: false,
  errorCity: null,
};
export const getCityIdReducer = createReducer(initialStateCity, (builder) => {
  builder
    .addCase(getCity.pending, (state) => {
      state.loadingCity = true;
    })
    .addCase(getCity.fulfilled, (state, action) => {
      state.city = action.payload;
      state.loadingCity = false;
    })
    .addCase(getCity.rejected, (state, action) => {
      state.errorCity = action.error.message;
      state.loadingCity = false;
    });
});
