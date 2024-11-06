import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../Store/actions/citiesActions.js";
import Itineraries from "../components/Itineraries.jsx";
import {
  FaFlag,
  FaGlobe,
  FaMoneyBillWave,
  FaLanguage,
  FaUserShield,
  FaCity,
  FaTemperatureHigh,
  FaHistory,
} from "react-icons/fa";

const DetailCity = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    city,
    loadingCity: loading,
    errorCity: error,
  } = useSelector((state) => state.cityId);

  useEffect(() => {
    dispatch(getCity(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-2xl font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4 md:p-8">
      {city ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-96 object-cover"
            src={city.Photo}
            alt={city.Name}
          />

          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {city.Name}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{city.Description}</p>

            {/* Información principal en un grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaFlag className="text-blue-500 mr-2" />
                <span className="font-semibold">Country:</span> {city.Country}
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-green-500 mr-2" />
                <span className="font-semibold">Continent:</span>{" "}
                {city.Continent}
              </div>
              <div className="flex items-center">
                <FaMoneyBillWave className="text-yellow-500 mr-2" />
                <span className="font-semibold">Currency:</span> {city.Currency}
              </div>
              <div className="flex items-center">
                <FaLanguage className="text-red-500 mr-2" />
                <span className="font-semibold">Languages:</span>{" "}
                {city.Language}
              </div>
              <div className="flex items-center">
                <FaCity className="text-purple-500 mr-2" />
                <span className="font-semibold">Population:</span>{" "}
                {city.Population.toLocaleString()}
              </div>
              <div className="flex items-center">
                <FaUserShield className="text-gray-500 mr-2" />
                <span className="font-semibold">Security:</span> {city.Security}
              </div>
              <div className="flex items-center">
                <FaTemperatureHigh className="text-orange-500 mr-2" />
                <span className="font-semibold">Climate:</span> {city.Climate}
              </div>
              <div className="flex items-center">
                <FaCity className="text-indigo-500 mr-2" />
                <span className="font-semibold">Economy:</span> {city.Economy}
              </div>
            </div>

            {/* Historia de la ciudad */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                <FaHistory className="inline text-gray-600 mr-2" /> History
              </h2>
              <p className="text-gray-700">{city.History}</p>
            </div>

            <NavLink
              to="/Cities"
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Go Back
            </NavLink>
          </div>
        </div>
      ) : (
        <div>No city found.</div>
      )}
      <Itineraries />
    </div>
  );
};

export default DetailCity;
