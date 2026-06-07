import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-950/60 border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          🌊 Ocean
        </Link>

        <div className="flex gap-8">

          <Link
            to="/"
            className="text-white hover:text-cyan-300 transition"
          >
            Home
          </Link>

          <Link
            to="/write"
            className="text-white hover:text-cyan-300 transition"
          >
            Throw
          </Link>

          <Link
            to="/sea"
            className="text-white hover:text-cyan-300 transition"
          >
            Sea
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;