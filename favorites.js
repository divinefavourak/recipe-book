// favorites.js (for favorites.html)
import { getFavorites, removeFavorite, addFavorite, isFavorite } from './favoritesManager.js';

const favoritesGrid = document.getElementById('favorites-grid');

function displayFavorites() {
    const favorites = getFavorites();
    favoritesGrid.innerHTML = '';
    favorites.forEach(recipe => {
        const card = createRecipeCard(recipe);
        favoritesGrid.appendChild(card);
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
            displayFavorites(); // Refresh grid
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

// Initial load
displayFavorites();