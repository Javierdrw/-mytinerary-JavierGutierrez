import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const routes = [
    { to: "/", text: "Home" },
    { to: "/Cities", text: "Cities" },
    { to: "/logo", text: "login" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row w-full md:h-fit pt-4 h-[50vh] mx-4 items-start md:justify-between gap-4 my-4 justify-between bg-black border-t-2 border-gray-500 px-2 text-white">
        <div className="flex gap-4 flex-col md:mt-4">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className="hover:text-blue-500 text-lg font-bold hover:border-b-2 border-blue-500 transition-all duration-300"
            >
              {route.text}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:mt-4">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p>123 Street, City</p>
          <p>Email: contact@mytinerary.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="md:mt-4">
          <h3 className="text-2xl font-bold">Social Media</h3>
          <a
            className="flex gap-2 items-center min-h-10 hover:text-blue-500 hover:border-b-2 border-blue-500 transition-all duration-300 text-lg"
            href="https://www.facebook.com"
          >
            <FaFacebook />
            Facebook
          </a>
          <a
            className="flex gap-2 items-center min-h-10 hover:text-blue-500 hover:border-b-2 border-blue-500 transition-all duration-300 text-lg"
            href="https://www.twitter.com"
          >
            {" "}
            <FaTwitter />
            Twitter
          </a>
          <a
            className="flex gap-2 items-center min-h-10 hover:text-blue-500 hover:border-b-2 border-blue-500 transition-all duration-300 text-lg"
            href="https://www.instagram.com"
          >
            {" "}
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
