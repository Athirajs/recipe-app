import { useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipeList from "./RecipeList";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-16 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => (
          <RecipeList key={index} item={item} />
        ))
      ) : (
        <div className="bg-gray-800/90 border border-gray-700 shadow-xl p-10 rounded-2xl w-full max-w-2xl text-center">
          <p className="lg:text-4xl text-2xl text-gray-200 font-bold leading-snug">
            Nothing is Added in Favorites 
          </p>
        </div>
      )}
    </div>
  );
}