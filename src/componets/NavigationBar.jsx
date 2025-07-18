import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";

function NavigationBar() {
  const { searchParams, setSearchParams, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="bg-gray-900 text-white py-6 shadow-lg shadow-red-900 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 px-4">
        <h2 className="text-3xl font-extrabold text-red-500 hover:text-red-400 tracking-tight transition duration-300">
          <NavLink to="/">FoodRecipe</NavLink>
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            name="search"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Search recipes..."
            className="bg-gray-800 text-white placeholder-gray-400 p-3 px-6 rounded-full w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700"
          />
        </form>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 underline underline-offset-4"
                  : "text-gray-300 hover:text-red-300 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 underline underline-offset-4"
                  : "text-gray-300 hover:text-red-300 transition duration-300"
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
