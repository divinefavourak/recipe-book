// search.js (for search.html)
import { getRecipes } from './recipeAPI.js';
import { addFavorite, removeFavorite, isFavorite } from './favoritesManager.js';

const searchInput = document.getElementById('search-input');
const recipeGrid = document.getElementById('recipe-grid');

async function displayRecipes(query = '') {
    const recipes = await getRecipes(query);
    recipeGrid.innerHTML = '';
    recipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.src = recipe.thumbnail || 'https://via.placeholder.com/200?text=No+Image';
    img.alt = recipe.title;
    
    const title = document.createElement('h3');
    title.textContent = recipe.title;
    
    const heart = document.createElement('button');
    heart.classList.add('heart');
    heart.textContent = isFavorite(recipe.title) ? '❤️' : '♡';
    if (isFavorite(recipe.title)) heart.classList.add('filled');
    
    heart.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isFavorite(recipe.title)) {
            removeFavorite(recipe.title);
            heart.textContent = '♡';
            heart.classList.remove('filled');
        } else {
            addFavorite(recipe);
            heart.textContent = '❤️';
            heart.classList.add('filled');
        }
    });
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(heart);
    
    card.addEventListener('click', () => {
        window.open(recipe.href, '_blank');
    });
    
    return card;
}

// Debounce function to limit API calls
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

searchInput.addEventListener('input', debounce(() => displayRecipes(searchInput.value), 300));

// Initial load
displayRecipes();