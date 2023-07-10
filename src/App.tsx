import Router from "./Router/Router";
import { UserProvider } from "./Pages/context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
