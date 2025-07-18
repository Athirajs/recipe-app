import { Link } from "react-router-dom";

export default function RecipeList({ item }) {
  return (
    <div className="relative flex flex-col w-80 overflow-hidden p-5 bg-gray-800/60 backdrop-blur-md shadow-lg gap-4 border border-gray-700 rounded-3xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-red-800/50 hover:shadow-2xl">
    
      <div className="h-48 overflow-hidden rounded-2xl bg-gray-900">
        <img
          src={item?.image_url}
          alt={item?.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <span className="text-xs font-semibold uppercase text-gray-400 tracking-wide">
        {item?.publisher}
      </span>
      <h3 className="text-lg font-bold text-gray-100 leading-snug line-clamp-2">
        {item?.title}
      </h3>
      <Link
        to={`/recipe-item/${item?.id}`}
        className="inline-block mt-auto text-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300"
      >
        View Recipe
      </Link>
    </div>
  );
}
