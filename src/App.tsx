import { useEffect, useState } from "react";
import Router from "./Router/Router";
import { UserContext } from "./Pages/context/UserContext";

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      console.log("토큰값", token);
      setToken(access_token);
    }
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken }}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
