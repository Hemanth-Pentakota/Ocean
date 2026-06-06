import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Sea() {
  const [bottle, setBottle] = useState(null);

 const fetchBottle = async () => {
  try {

    let url =
      `${import.meta.env.VITE_API_URL}/api/bottle/random`;

    if (bottle?._id) {
      url += `?exclude=${bottle._id}`;
    }

    const response = await fetch(url);

    const data = await response.json();

    setBottle(data);

  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchBottle();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 bg-gradient-to-b from-blue-800 to-blue-950 text-white flex items-center justify-center px-4">

        <div className="max-w-xl text-center">

          <h1 className="text-4xl font-bold mb-2">
            🌊 Sailing The Ocean
          </h1>

          <p className="text-gray-300 mb-8">
            A message drifted ashore...
          </p>

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-white/90 text-black p-8 rounded-3xl shadow-2xl max-w-xl"
          >
            {bottle ? (
              <p className="text-xl italic leading-relaxed">
                "{bottle.message}"
              </p>
            ) : (
              <div className="animate-pulse text-lg">
                Searching the ocean...
              </div>
            )}
          </motion.div>

          <button
            onClick={fetchBottle}
            className="mt-6 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold transition hover:scale-105"
          >
            Next Wave 🌊
          </button>

        </div>

      </div>
    </>
  );
}

export default Sea;