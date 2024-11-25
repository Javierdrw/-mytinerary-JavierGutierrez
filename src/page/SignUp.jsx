import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restfulcountries.com/api/v1/countries",
          {
            headers: {
              Authorization:
                "Bearer 1666|i0qDxAISh3YhKwUGqr4ukXcakK0EdWomK6j1rp1t",
            },
          }
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Photo: "",
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    confirmPassword: "",
    category: "",
    country: "client",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { ...formData };
      delete userData.confirmPassword;
      const response = await axios.post(
        "http://localhost:8080/api/user/create",
        userData
      );
      navigate("/?token=" + response.data.token);
      setError(response.data.message);
      console.log(response.data.token);
    } catch (err) {
      console.error(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "confirmPassword") {
      if (e.target.value !== formData.Password) {
        setPasswordError("Passwords do not match.");
      } else {
        setPasswordError("");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        <form
          className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="Name" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter your first name"
              value={formData.Name}
              onChange={handleChange}
              minLength={3}
              maxLength={20}
              pattern=".{3,20}"
              title="The name must be between 3 and 20 characters long."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {(formData.Name.length < 3 || formData.Name.length > 20) &&
            formData.Name.length > 0 ? (
              <p className="text-red-500 text-sm mt-1">
                The name must be between 3 and 20 characters long.
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="LastName" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Enter your last name"
              value={formData.LastName}
              onChange={handleChange}
              minLength={3}
              maxLength={20}
              pattern=".{3,20}"
              title="The last name must be between 3 and 20 characters long."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {(formData.LastName.length < 3 || formData.LastName.length > 20) &&
            formData.LastName.length > 0 ? (
              <p className="text-red-500 text-sm mt-1">
                The last name must be between 3 and 20 characters long.
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
              value={formData.Email}
              onChange={handleChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Email must be in a valid format"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {formData.Email.length > 0 &&
            (formData.Email.length < 3 ||
              !formData.Email.match(
                /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              )) ? (
              <p className="text-red-500 text-sm mt-1">
                Email must be in a valid format
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Photo" className="font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="Photo"
              name="Photo"
              placeholder="Enter your photo URL"
              value={formData.Photo}
              onChange={handleChange}
              minLength={3}
              maxLength={300}
              pattern=".{3,300}"
              title="The photo URL must be between 3 and 300 characters long"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {(formData.Photo.length < 3 || formData.Photo.length > 300) &&
            formData.Photo.length > 0 ? (
              <p className="text-red-500 text-sm mt-1">
                The photo URL must be between 3 and 300 characters long
              </p>
            ) : null}
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="Password" className="font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              name="Password"
              placeholder="Enter your password"
              value={formData.Password}
              onChange={handleChange}
              minLength={8}
              maxLength={128}
              pattern=".{8,128}"
              title="Password must be between 8 and 128 characters"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {(formData.Password.length < 8 || formData.Password.length > 128) &&
            formData.Password.length > 0 ? (
              <p className="text-red-500 text-sm mt-1">
                Password must be between 8 and 128 characters
              </p>
            ) : null}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="confirmPassword" className="font-medium">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            ><option selected >Select</option>
              <option value="client">Client</option>
              <option value="collaborator">Collaborator</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country} // Asegúrate de incluir `country` en tu estado de formulario
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select a country
              </option>
              {countries.data ? (
                countries.data.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))
              ) : (
                <option value="">No countries available</option>
              )}
            </select>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
