import { useState } from "react";
import "./App.css";
import TheAuth from "./Components/TheAuth/TheAuth";
import TheSuccess from "./Components/TheSuccess/TheSuccess";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <TheSuccess propHandleLogin={handleLogin} />
      ) : (
        <TheAuth propOnLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
