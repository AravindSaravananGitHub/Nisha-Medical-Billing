import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import MobilMenu from "./Components/MobilMenu";
import Home from "./Components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearTimeout(timer);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main">
          <Navbar />
          <MobilMenu />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
