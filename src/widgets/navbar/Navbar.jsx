import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/eleromart.png";
import { useState } from "react";
import Login from "../../component/loginpage/LogIn";

function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 w-full min-h-20 shadow-xl fixed top-0 left-0 z-50">
        <div className="flex items-center px-5 gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="py-2.5 px-5">
              <img
                className="w-65 h-10"
                src={logo}
                alt="EloraMart"
              />
            </div>

            <div className="px-8">
              <h2 className="font-bold text-[20px]">
                Delivery in 13 minutes
              </h2>
            </div>
          </Link>

          {/* Search */}
          <div className="relative w-150 h-12 ml-5">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full h-full border border-gray-300 rounded-xl px-12 outline-none focus:border-gray-600 bg-gray-200"
            />

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          {/* Login Button */}
          <button
            onClick={() => setLoginOpen(true)}
            className="w-20 h-10 text-[22px] cursor-pointer"
          >
            Login
          </button>

          {/* Cart */}
          <Link to="/" className="py-3">
            <button
              className="border rounded-xl w-26 h-14 py-1 font-semibold cursor-not-allowed"
            >
              My Cart
            </button>
          </Link>

        </div>
      </nav>

      {/* Login Popup */}
      {loginOpen && (
        <Login onClose={() => setLoginOpen(false)} />
      )}
    </>
  );
}

export default Navbar;

