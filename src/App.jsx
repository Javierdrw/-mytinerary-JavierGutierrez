import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home.jsx";
import Cities from "./page/Cities.jsx";
import NotFound from "./page/NotFound.jsx";
import Detail from "./page/Detail.jsx";
import "./App.css";
import StandarLayout from "./Layouts/StandarLayout";

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Cities", element: <Cities></Cities> },
      { path: "/detail/:id", element: <Detail></Detail> },
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
