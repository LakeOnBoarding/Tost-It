import { useEffect, useState } from "react";
import Router from "./Router/Router";
import { UserContext } from "./Pages/context/UserContext";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken, isLoading }}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
