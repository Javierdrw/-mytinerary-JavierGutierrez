import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { setSearch } from "../Store/actions/citiesActions";

const Search = () => {
  const { search } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center  ">
      <div className="w-[300px] bg-[#475569] flex justify-center rounded-full items-center ">
        <IoSearch className="text-3xl mt-2" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 placeholder-gray-300 text-gray-300 bg-transparent rounded-3xl focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
