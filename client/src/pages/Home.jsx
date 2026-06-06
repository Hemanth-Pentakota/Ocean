import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen pt-24 bg-gradient-to-b from-blue-800 to-blue-950 text-white flex items-center justify-center px-4">

      <div className="text-center">

        <h1 className="text-6xl font-bold mb-4">
          🌊 Message In A Bottle
        </h1>

        <p className="text-gray-300 mb-10">
          Throw your thoughts into the ocean.
          Read someone else's.
        </p>

        <div className="flex gap-4 justify-center">

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

      </div>

    </div>
    </>
  );
}

export default Home;