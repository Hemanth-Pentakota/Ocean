import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

function WriteBottle() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [throwing, setThrowing] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("Please write something");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bottle`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        },
      );

      const data = await response.json();

      localStorage.setItem("bottleCountNeedsRefresh", "true");

      console.log(data);

      // alert("Bottle thrown 🌊");

      // toast.success("Bottle released into the ocean 🌊");

      // setMessage("");
      // navigate("/sea");
      setMessage("");

      setThrowing(true);

      setTimeout(() => {
        navigate("/sea");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-950 pt-24 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            Throw A Bottle 🤾‍♂️
          </h1>

          <textarea
            className="w-full h-52 p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write anything..."
          />

          <p className="mt-2 text-sm">Characters: {message.length}</p>

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-cyan-500 py-3 rounded-xl font-semibold"
          >
            Throw Bottle
          </button>
        </div>
      </div>
      {throwing && (
        <div className="fixed inset-0 bg-blue-950 flex items-center justify-center z-50">
          <div className="text-center animate-pulse">
            <motion.div
              initial={{
                y: -300,
                rotate: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-7xl mb-4"
            >
              🍾
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="text-5xl"
            >
              😎
            </motion.div>

            <h2 className="text-3xl font-bold text-white">Bottle Released</h2>

            <p className="text-cyan-300 mt-2">Drifting into the ocean...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WriteBottle;
