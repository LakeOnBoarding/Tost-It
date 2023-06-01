import React from "react";
import Router from "./Router/Router";
import { UserContext } from "./Pages/context/UserContext";

function App() {
  const access_token: string | null = localStorage.getItem("access_token");

  return (
    <div className="App">
      <UserContext.Provider value={access_token}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
