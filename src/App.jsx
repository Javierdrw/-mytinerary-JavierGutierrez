import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./page/home.jsx";
import Cities from "./page/cities.jsx";
import NotFound from "./page/NotFound.jsx";
import './App.css';
import StandarLayout from './Layouts/StandarLayout';

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/Cities', element: <Cities></Cities>},
    ],
  },
  {
    path: '/*',
    element: <NotFound></NotFound>
  }

])

function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
   
    </>
  )
}

export default App
