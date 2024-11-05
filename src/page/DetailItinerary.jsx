import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItineraryId } from "../Store/actions/itinerariesActions.js";
import { NavLink } from "react-router-dom";

const DetailItinerary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { itineraryId, loadingItineraryId } = useSelector(
    (state) => state.itineraryId
  );

  useEffect(() => {
    dispatch(getItineraryId(id));
  }, [dispatch, id]);

  if (loadingItineraryId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {Object.keys(itineraryId).length > 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mx-2">
            Itinerary Details
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="relative mx-2">
              <img
                src={itineraryId.photo}
                alt={itineraryId.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <p className="text-white font-bold text-2xl">
                  This itinerary is under construction
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                {itineraryId.name}
              </h3>
              <p className="text-gray-700">
                Duration: {itineraryId.duration} hour(s)
              </p>
              <p className="text-gray-700">Likes: {itineraryId.likes}</p>
              <p className="text-gray-500 italic">{itineraryId.hashtags}</p>
              <p className="text-gray-700">
                Price: {itineraryId.price.currency} {itineraryId.price.worth}
              </p>
            </div>
          </div>
          <NavLink
            to={`/detailCity/${itineraryId.city}`}
            className="mt-2 mx-2 bg-blue-500 w-[150px] h-[40px] items-center font-bold flex justify-center text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            View More
          </NavLink>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-4xl font-bold">No Itinerary Found</p>
        </div>
      )}
    </div>
  );
};

export default DetailItinerary;
