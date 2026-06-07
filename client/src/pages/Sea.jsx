import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Sea() {
  const [bottle, setBottle] = useState(null);

  const fetchBottle = async () => {
    try {
      let url = `${import.meta.env.VITE_API_URL}/api/bottle/random`;

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
          <h1 className="text-3xl md:text-4xl font-bold"> ⛵Sailing The Ocean</h1>

          <p className="text-gray-300 mb-8">A message drifted ashore...</p>

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
            className="bg-white/90 text-black p-6 md:p-8 rounded-3xl shadow-2xl max-w-xl"
          >
            {bottle ? (
              <p className="text-xl italic leading-relaxed">
                "{bottle.message}"
              </p>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />

                <p className="text-lg">🌊 Searching the ocean...</p>
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
