// recipeAPI.js
export async function getRecipes(query = '') {
    const response = await fetch(`http://www.recipepuppy.com/api/?q=nigerian+${query}`);
    const data = await response.json();
    return data.results;
}