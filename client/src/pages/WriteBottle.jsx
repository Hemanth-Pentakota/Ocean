import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function WriteBottle() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
      }
    );

    const data = await response.json();

    console.log(data);

    // alert("Bottle thrown 🌊");

    setMessage("");
    navigate("/sea");

  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-blue-950 pt-24 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Throw A Bottle 🌊
        </h1>

        <textarea className="w-full h-52 p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md"
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
    </>
  );
}

export default WriteBottle;
