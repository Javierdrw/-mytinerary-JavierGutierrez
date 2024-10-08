
import  imagenes  from "../data/curruselData";
import Carrusel from "./Carrusel";
import ButtonAccion from "./ButtonAccion";

export default function PopularTineraries() {
 
  return (
    <div className="bg-black p-10 text-white lg:grid gap-3 lg:grid-cols-3 grid-flow-col lg:justify-items-center items-center md:h-full h-[120vh]">
      <article className="bg-slate-600 p-6 text-slate-300 grid my-auto  rounded-2xl w-full lg:h-[60vh]  xl:h-[660px]">
        <h2 className="text-3xl font-bold">Discover your dream getaway</h2>
        <p className="text-2xl  mb-2">
          Our platform makes it simple to explore and plan the perfect trip.
          With a user-friendly design and a variety of itinerary options, your
          next adventure is just a few clicks away.
        </p>

        <ButtonAccion />
      </article>
      <article className="col-span-2">

      <Carrusel carruselData={imagenes} />
      </article>
    </div>
  );
}
