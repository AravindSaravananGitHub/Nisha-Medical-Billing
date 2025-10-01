import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
      return () => clearTimeout(timer);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="loader">
            <span className="loading-span">
              <h4>
                <b>Loading...</b>
              </h4>
            </span>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen bg-hero">
          <h2 className=" text-3xl font-bold underline ">
            This is the the portfolio website for Nisha
          </h2>
        </div>
      )}
    </>
  );
}

export default App;
