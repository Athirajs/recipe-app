import { useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipeList from "./RecipeList";

function HomePage() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <p className="text-xl text-gray-300 font-semibold animate-pulse">
          Loading... Please wait
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => (
          <RecipeList key={index} item={item} />
        ))
      ) : (
        <div className="bg-gray-800/90 border border-gray-700 shadow-xl p-10 rounded-2xl w-full max-w-2xl text-center">
          <p className="lg:text-4xl text-2xl text-gray-200 font-bold leading-snug">
            Nothing to show. <br /> Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
