import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/SignUp"));
const Left = lazy(() => import("./home/Leftpart/Left"));
const Right = lazy(() => import("./home/Rightpart/Right"));

function App() {
   const { authUser } = useAuth();  // Use the direct object for authUser
   return (
     <Suspense fallback={<div>Loading...</div>}>
       <Routes>
         <Route
           path="/"
           element={
             authUser ? (
               <div className="flex h-screen">
                 <Left />
                 <Right />
               </div>
             ) : (
               <Navigate to="/login" />
             )
           }
         />
         <Route
           path="/login"
           element={authUser ? <Navigate to="/" /> : <Login />}
         />
         <Route
           path="/signup"
           element={authUser ? <Navigate to="/" /> : <Signup />}
         />
         <Route path="*" element={<Navigate to="/" />} />
       </Routes>
     </Suspense>
   );
}

export default App;
