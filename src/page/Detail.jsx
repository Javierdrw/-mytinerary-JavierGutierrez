import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/city/detail/${id}`
        );
        const data = await response.json();
        if (response.ok) {
          setCity(data.response);
          setLoading(false);
        } else {
          throw new Error(data.message || "Error fetching city details");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCity();
  }, [id]);

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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
              src={city.Photo}
              alt={city.Name}
            />

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {city.Name}
              </h1>
              <p className="text-gray-600 mb-6">{city.Description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Under construction
                </h2>
              </div>
            </div>
          </div>
          <NavLink
            to={`/Cities`}
            className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Go Back
          </NavLink>
        </div>
      ) : (
        <div>No city found.</div>
      )}
    </div>
  );
};

export default Detail;
