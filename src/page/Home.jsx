import React from "react";
import PopularTineraries from "../components/PopularTineraries";
import ButtonAccion from "../components/ButtonAccion";

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col text-white justify-center gap-2 items-center h-[86vh] ">
        <h1 className="text-3xl font-bold bg-slate-800/50 m-2 p-2">
          My Tinerary
        </h1>
        <p className="text-2xl w-[50vw] bg-slate-800/50 text-center p-2 ">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <ButtonAccion />
      </div>
      <PopularTineraries />
    </>
  );
}
