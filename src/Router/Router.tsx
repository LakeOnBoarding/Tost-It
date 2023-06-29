import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SignUp/Signup";
import Splash from "../Pages/Splash/Splash";
import Todo from "../Pages/Todo/Todo";
import NotFound from "../Pages/NotFound/NotFound";
import { UserContext } from "../Pages/context/UserContext";

export default function Router() {
  const token = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/*" element={<NotFound />} />
        {token ? (
          <Route path="/todo" element={<Todo />} />
        ) : (
          <Route>
            {" "}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
