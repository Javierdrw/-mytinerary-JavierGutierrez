import { useNavigate } from "react-router-dom";
export default function ButtonAccion() {
    const navigate = useNavigate();
    return (
        <button
          className="p-2 bg-slate-800 hover:bg-blue-500 hover:scale-105 transition-all h-fit w-fit mx-auto duration-500 ease-out font-bold text-xl rounded-lg shadow-lg hover:shadow-blue-500/50 transform hover:translate-y-1"
          onClick={() => navigate("/cities")}
        >
          Find out now!
        </button>
    )
}