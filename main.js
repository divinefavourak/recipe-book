const recipeGrid = document.getElementById('recipe-grid');
const favouritesGrid = document.getElementById('favourites-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-submit');

const API_URL = 'http://localhost:5000/api/foods'; // Change if deployed

function getFavorites() {
  const favs = localStorage.getItem('recipeFavorites');
  return favs ? JSON.parse(favs) : [];
}

function addFavorite(recipe) {
  const favs = getFavorites();
  if (!favs.some(r => r.id === recipe.id)) {
    favs.push(recipe);
    localStorage.setItem('recipeFavorites', JSON.stringify(favs));
    renderFavourites();
  }
}

function removeFavorite(id) {
  const favs = getFavorites().filter(r => r.id !== id);
  localStorage.setItem('recipeFavorites', JSON.stringify(favs));
  renderFavourites();
}

function renderRecipes(recipes) {
  recipeGrid.innerHTML = '';
  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.name}" class="recipe-img" />
      <div class="recipe-info">
        <span>${recipe.name}</span>
        <button class="favorite-btn">${isFavorited(recipe.id) ? '❤️' : '🤍'}</button>
      </div>
    `;
    card.querySelector('.favorite-btn').onclick = () => {
      if (isFavorited(recipe.id)) {
        removeFavorite(recipe.id);
      } else {
        addFavorite(recipe);
      }
      renderRecipes(recipes);
    };
    recipeGrid.appendChild(card);
  });
}

function renderFavourites() {
  const favs = getFavorites();
  favouritesGrid.innerHTML = '';
  favs.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.name}" class="recipe-img" />
      <div class="recipe-info">
        <span>${recipe.name}</span>
        <button class="favorite-btn">❤️</button>
      </div>
    `;
    card.querySelector('.favorite-btn').onclick = () => {
      removeFavorite(recipe.id);
      renderFavourites();
    };
    favouritesGrid.appendChild(card);
  });
}

function isFavorited(id) {
  return getFavorites().some(r => r.id === id);
}

async function fetchRecipes(query) {
  let url = API_URL;
  if (query && query.trim()) {
    url += `?search=${encodeURIComponent(query.trim())}`;
  }
  const res = await fetch(url);
  const data = await res.json();
  renderRecipes(data);
}

searchBtn.onclick = () => {
  fetchRecipes(searchInput.value);
};

document.getElementById('search-btn').onclick = () => {
  searchInput.focus();
};

window.onload = () => {
  fetchRecipes('');
  renderFavourites();
};
