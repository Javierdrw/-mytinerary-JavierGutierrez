import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { IoPersonSharp } from "react-icons/io5";

const routes = [
  { to: "/", text: "Home" },
  { to: "/Cities", text: "Cities" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("UserItinerary");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.token) {
        setUser(parsedData.user);
      }
    }
  }, []);
  function getRandomColor() {
    const colors = ["#FF69B4", "#33CC33", "#6666CC", "#CC3333", "#33CCCC"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const logout = () => {
    localStorage.removeItem("UserItinerary");
    setUser(null); // Restablece el estado del usuario
  };

  return (
    <nav className="bg-neutral-900/80 md:grid md:grid-cols-3 h-[15vh] flex justify-between items-center py-2 px-6 fixed top-0 w-full z-50 shadow-lg">
      <NavLink to="/" onClick={toggleMenu}>
        <h1 className="md:text-3xl text-2xl text-white font-bold md:w-fit w-[10vw] hover:underline">
          My Tinerary
        </h1>
      </NavLink>
      <NavLink to="/" onClick={toggleMenu}>
        <img
          src={logo}
          alt="Logo"
          className="h-[10vh] md:h-[12vh] rounded-full mx-auto"
        />
      </NavLink>

      <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
        &#9776;
      </button>

      <ul
        className={`lg:flex gap-4 lg:mr-2 items-center my-auto justify-end text-white text-xl font-bold absolute lg:static top-[128px] left-0 w-full bg-neutral-900/80 lg:bg-transparent transition-all duration-700 ease-in-out overflow-hidden z-40 ${
          isOpen ? "max-h-[500px]" : "max-h-0 lg:max-h-[500px]"
        }`}
      >
        {routes.map((r, index) => (
          <li key={index} className="p-3">
            <NavLink
              onClick={toggleMenu}
              to={r.to}
              className={({ isActive }) =>
                isActive ? "text-red-600 hover:underline" : "hover:underline"
              }
            >
              {r.text}
            </NavLink>
          </li>
        ))}
        <li className="p-3">
          {user ? (
            <div className="flex items-center gap-2">
              {user.Photo && user.Photo.trim() ? (
                <img
                  src={user.Photo}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div
                  className={`w-10 h-10 rounded-full flex justify-center items-center bg-blue-500 text-white bg-${getRandomColor()}`}
                >
                  {user.Name.charAt(0).toUpperCase()}
                </div>
              )}

              <span>
                {user.Name.charAt(0).toUpperCase() + user.Name.slice(1)}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              onClick={toggleMenu}
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 w-fit transition-all duration-300 ease-in-out rounded hover:bg-blue-700 flex items-center"
            >
              <IoPersonSharp />
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
