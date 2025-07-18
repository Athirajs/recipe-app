import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";

function NavigationBar() {
    const {searchParams, setSearchParams} = useContext(GlobalContext)
    console.log(searchParams);
  return (
    <nav className="bg-gray-900 text-white py-6 shadow-md shadow-red-900">
      <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-0 px-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold text-red-400 hover:text-red-300 transition duration-300">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>

        {/* Search Bar */}
        <form className="w-full max-w-md">
          <input
            type="text"
            name="search"
            value={searchParams}
            onChange={(e)=> setSearchParams(e.target.value) }
            placeholder="Search recipes..."
            className="bg-gray-800 text-white placeholder-gray-400 p-3 px-6 rounded-full w-full shadow-inner focus:ring-2 focus:ring-red-400 outline-none transition"
          />
        </form>

        {/* Nav Links */}
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 underline"
                  : "text-gray-300 hover:text-red-300 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Favorites"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 underline"
                  : "text-gray-300 hover:text-red-300 transition"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
