import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities} from "../Store/actions/citiesActions";
import Search from "../components/Search";

export default function Cities() {
  const { cities, loading, error, search } = useSelector(
    (state) => state.cities
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities(search));
  }, []);

  const filterCities = cities.filter((item) => {
    return item.Name.toLowerCase().startsWith(search.toLowerCase());
  });
 

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
      <div className="bg-gradient-to-r from-blue-500 to-green-400 pt-2">
<Search></Search>

        {filterCities.length === 0 ? (
          <div className="text-center text-xl text-gray-950 font-bold mt-4">
            No matches found.
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-3 w-[100vw] place-items-center">
            {filterCities.map((city) => (
              <div
                className="relative w-[350px] h-[300px] rounded-lg overflow-hidden group"
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
                    to={`/detailCity/${city._id}`}
                    className="mt-2 bg-blue-500 w-[150px] h-[40px] items-center font-bold flex justify-center text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    View More
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
