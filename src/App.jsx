import { useEffect, useState } from "react";

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
        <div className="loading-container">
          <div className="loader">
            <div className="loading-span">
              <span>
                <b>L</b>
              </span>
              <span>
                <b>o</b>
              </span>
              <span>
                <b>a</b>
              </span>
              <span>
                <b>d</b>
              </span>
              <span>
                <b>i</b>
              </span>
              <span>
                <b>n</b>
              </span>
              <span>
                <b>g</b>
              </span>
              <span>
                <b>.</b>
              </span>
              <span>
                <b>.</b>
              </span>
              <span>
                <b>.</b>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen bg-hero">
          <h2 className=" text-3xl font-bold underline ">Under Construction</h2>
        </div>
      )}
    </>
  );
}

export default App;
