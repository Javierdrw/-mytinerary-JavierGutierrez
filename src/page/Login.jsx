import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { login } from "../Store/actions/authAction";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  // Estado local para inputs y error
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Estado global de Redux
  const { loading, error } = useSelector((state) => state.auth);
  // Manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ Email, Password })).unwrap();

      if (result.token) {
        localStorage.setItem(
          "UserItinerary",
          JSON.stringify({
            token: result.token,
            user: result.user,
          })
        );
        navigate("/");
        window.location.reload();
      }
    } catch (error) {}
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Explore the world with us 🌍
        </p>

        {/* Mostrar mensaje de error */}
        {authError && (
          <div className="mb-4 text-red-600 text-center">{authError}</div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="Email"
              id="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            // disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={() => loginWithGoogle()} // Reemplazar con lógica real
          className="w-full bg-orange-50 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-orange-200 transition duration-300 border-2 border-orange-400"
        >
          <FcGoogle className="mr-2 text-2xl" />
          Sign In with Google
        </button>

        {/* Additional Links */}
        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <a href="/recover-Password" className="hover:underline">
            Forgot Password?
          </a>
          <NavLink to="/signUp" className="hover:underline">
            Don’t have an account? Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
