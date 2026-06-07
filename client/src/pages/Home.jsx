import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

function Home() {
  const [bottleCount, setBottleCount] = useState(0);

  const fetchBottleCount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bottle/count`,
      );

      const data = await response.json();

      setBottleCount(data.count);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBottleCount();
  }, []);

  useEffect(() => {
    const needsRefresh = localStorage.getItem("bottleCountNeedsRefresh");

    if (needsRefresh === "true") {
      fetchBottleCount();

      localStorage.removeItem("bottleCountNeedsRefresh");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gradient-to-b from-blue-800 to-blue-950 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🗨️ Message In A Bottle
          </h1>

          <p className="text-gray-300 mb-10">
            Throw your thoughts into the ocean. Read someone else's.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/write"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Throw Bottle
            </Link>

            <Link
              to="/sea"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Go To Sea
            </Link>
          </div>
          <div className="mt-6 text-center">
            {/* <p className="text-cyan-200 text-lg">
              🌊 {bottleCount} Bottles Floating In The Ocean
            </p> */}
            <p className="text-cyan-200 text-lg md:text-xl font-semibold">
              🍾 {bottleCount} Bottles Floating
              <br />
              In The Ocean
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
