import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItinerariesCity } from "../Store/actions/itinerariesActions.js";
import { useParams } from "react-router-dom";
import { FaHeart, FaMoneyBillAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Itineraries = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { itineraries, loadingItinerary} = useSelector(
    (state) => state.itineraries
  );
  useEffect(() => {
    dispatch(getItinerariesCity(id));
  }, []);
  

  if (loadingItinerary) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {itineraries.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover transform transition duration-300 hover:scale-110"
                    src={itinerary.photo}
                    alt={itinerary.name}
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 text-lg font-bold">
                    {itinerary.name}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-sm text-gray-500 italic">
                    {itinerary.hashtags}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 font-semibold">
                      Duration: {itinerary.duration} hour(s)
                    </p>
                    <div className="flex items-center text-red-500">
                      <FaHeart className="mr-1" /> {itinerary.likes}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(itinerary.price.amount)].map((_, i) => (
                        <FaMoneyBillAlt
                          key={i}
                          className="text-green-500 mr-1"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 font-semibold">
                      Price: $ {itinerary.price.worth}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 space-x-3 border-t pt-3">
                    <img
                      src={itinerary.user?.Photo}
                      alt={itinerary.user?.Name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-300"
                    />
                    <p className="text-gray-700 font-semibold">
                      Created by {itinerary.user?.Name}
                    </p>
                    <NavLink
                    to={`/detailItinerary/${itinerary._id}`}
                    className="mt-2 bg-blue-500 w-[150px] h-[40px] items-center font-bold flex justify-center text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    View More
                  </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-2xl font-bold text-gray-800 flex justify-center pt-6">
          No itineraries yet for this city.
        </div>
      )}
    </div>
  );
};

export default Itineraries;
