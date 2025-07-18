import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { recipeDetailsData, loading ,setRecipeDetailsData , setLoading, handleAddToFavorite, favoritesList } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true); 
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        if (data?.data) {
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        console.error("Failed to fetch recipe", error);
      } finally {
        setLoading(false); 
      }
    }
    getRecipeDetails();
  }, [id]);
  

  const recipe = recipeDetailsData?.recipe;

  if (!recipe) {
    return (
      <div className="min-h-[40vh] flex justify-center items-center text-gray-400 text-xl">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6 text-white max-w-6xl">

      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-red-400 mb-2">{recipe.title}</h1>
        <p className="text-sm uppercase text-gray-400">
          Publisher: <span className="text-gray-200">{recipe.publisher}</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 bg-gray-800/70 rounded-2xl p-6 shadow-lg backdrop-blur-md">

        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />

<button
  onClick={() => handleAddToFavorite(recipe)}
  className={`px-6 py-3 rounded-full text-base font-semibold transition-all shadow-lg w-fit mx-auto flex items-center gap-2
    ${
      favoritesList?.some((item) => item.id === recipe.id)
        ? 'bg-gray-700 hover:bg-gray-600 text-white'
        : 'bg-red-500 hover:bg-red-600 text-white'
    }`}
>
  {favoritesList?.some((item) => item.id === recipe.id) ? (
    <>
      <span>💔</span> <span>Remove from Favorites</span>
    </>
  ) : (
    <>
      <span>❤️</span> <span>Add to Favorites</span>
    </>
  )}
</button>

        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            🧂 Ingredients
          </h3>
          <ul className="space-y-3">
            {recipe.ingredients.map((ing, i) => (
              <li
                key={i}
                className="flex items-start gap-2 bg-gray-800/60 text-gray-300 rounded-lg p-3 border border-gray-700"
              >
                <span className="text-red-400 font-medium">
                  {ing.quantity || "-"} {ing.unit}
                </span>
                <span className="text-gray-200">{ing.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
