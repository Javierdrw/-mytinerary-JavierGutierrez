import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer, getCityIdReducer } from "./reducer/citiesReducer";
import { itinerariesReducer, itineraryIdReducer } from "./reducer/itinerariesReducer";
import authReducer from "./reducer/authReducer";

const cities = configureStore({
    reducer: {
        cities: citiesReducer,
        cityId: getCityIdReducer,
        itineraries: itinerariesReducer,
        itineraryId: itineraryIdReducer,
        auth: authReducer,
    },
});

export default cities;