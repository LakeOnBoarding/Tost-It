import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SignUp/Signup";
import Splash from "../Pages/Splash/Splash";
import Todo from "../Pages/Todo/Todo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
        {/* <Route path='u*' element={<NotFuund/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
