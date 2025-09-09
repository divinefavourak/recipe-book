// favoritesManager.js
export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export function addFavorite(recipe) {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.title === recipe.title)) {
        favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export function removeFavorite(title) {
    const favorites = getFavorites().filter(fav => fav.title !== title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function isFavorite(title) {
    return getFavorites().some(fav => fav.title === title);
}