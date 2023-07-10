import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SignUp/Signup";
import Splash from "../Pages/Splash/Splash";
import Todo from "../Pages/Todo/Todo";
import NotFound from "../Pages/NotFound/NotFound";
import Category from "../Pages/category/Category";
import { UserContext } from "../Pages/context/UserContext";

export default function Router() {
  const token = useContext(UserContext)?.token;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />

        {token ? (
          <>
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/category" element={<Category />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
