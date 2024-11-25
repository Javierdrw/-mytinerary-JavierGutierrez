import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
  let token = ""   
    if(localStorage.getItem("UserItinerary")) {
        const dataUser = JSON.parse(localStorage.getItem("UserItinerary"));
        token = dataUser.token;}
    
    if(token)
        return <Navigate to="/" replace></Navigate>
    return children
}


export default PrivateRoute;
