import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer, getCityIdReducer } from "./reducer/citiesReducer";
import { itinerariesReducer, itineraryIdReducer } from "./reducer/itinerariesReducer";

const cities = configureStore({
    reducer: {
        cities: citiesReducer,
        cityId: getCityIdReducer,
        itineraries: itinerariesReducer,
        itineraryId: itineraryIdReducer
    },
});

export default cities;