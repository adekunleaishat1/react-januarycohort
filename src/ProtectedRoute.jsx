
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
   const user  = localStorage.getItem("cur-user")
   console.log(user);
   
   if (!user) {
    return <Navigate to="/formiklogin" replace/>
   }

   console.log("there is current user");
   
  return (
    <div><Outlet/></div>
  )
}

export default ProtectedRoute