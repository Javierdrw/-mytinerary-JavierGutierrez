import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Cities() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCities = () => {
      const url = search
        ? `http://localhost:8080/api/city/all?name=${search}`
        : "http://localhost:8080/api/city/all";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data.response);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    fetchCities();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div className="my-auto text-4xl w-full h-[60vh] flex justify-center items-center font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="bg-[#4478e7] pt-2">
        <div className="w-full flex justify-center  ">
          <div className="w-[300px] bg-[#475569] flex justify-center rounded-full items-center ">
            <IoSearch className="text-3xl mt-2" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleInputChange}
              className="p-3 placeholder-gray-300 text-gray-300 bg-transparent rounded-3xl focus:outline-none"
            />
          </div>
        </div>

        {data.length === 0 ? (
          <div className="text-center text-xl text-gray-950 font-bold mt-4">
            No matches found.
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-3 w-[100vw] place-items-center">
            {data.map((city) => (
              <div
                className="relative w-[300px] h-[300px] rounded-lg overflow-hidden group"
                key={city.Name}
              >
                <img
                  className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  src={city.Photo}
                  alt={city.Name}
                />

                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-extrabold bg-[#000000bb] w-fit px-2 mb-1 rounded-lg">
                    {city.Name}
                  </h3>
                  <p className="text-white text-md font-bold bg-[#000000bb] w-fit px-2 rounded-lg">
                    {city.Country}
                  </p>

                  <NavLink
                    to={`/detail/${city._id}`}
                    className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
