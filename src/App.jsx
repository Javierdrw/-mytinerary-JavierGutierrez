import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home.jsx";
import Cities from "./page/Cities.jsx";
import NotFound from "./page/NotFound.jsx";
import "./App.css";
import StandarLayout from "./Layouts/StandarLayout";
import DetailCity from "./page/DetailCity.jsx";
import DetailItinerary from "./page/DetailItinerary.jsx";

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Cities", element: <Cities></Cities> },
      { path: "/detailCity/:id", element: <DetailCity></DetailCity> },
      { path: "/detailItinerary/:id", element: <DetailItinerary></DetailItinerary> },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
