import React, { useEffect } from "react";
import PopularTineraries from "../components/PopularTineraries";
import ButtonAccion from "../components/ButtonAccion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser} from "../Store/actions/authAction";

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("https://mytinerary-back-javiergutierrez.onrender.com/api/auth/validateToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user; 
  } catch (error) {
    console.error("Error validando el token:", error);
    return null;
  }
};


export default function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if(localStorage.getItem("UserItinerary")) {
    const dataUser = JSON.parse(localStorage.getItem("UserItinerary"));
    dispatch(setUser({ user: dataUser.user, token: dataUser.token }));
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    
  
    if (token) {
      loginWithToken(token).then((user) => {
        if (user) {
          dispatch(setUser({ user, token }));
          localStorage.setItem("UserItinerary", JSON.stringify({ token, user }));
          navigate("/");
          window.location.reload();
        } else {
          console.error("Invalid token received from Google");
        }
      });
    } else {
      const storedData = localStorage.getItem("UserItinerary");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.token) {
          loginWithToken(parsedData.token).then((user) => {
            if (user) {
              dispatch(setUser({ user, token: parsedData.token }));
            } else {
              setUser(null);
              console.error("Token almacenado no es válido");
              localStorage.removeItem("UserItinerary");
              window.location.reload();
            }
          });
        }
      }
    }
  }, [navigate, dispatch]);
  

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
