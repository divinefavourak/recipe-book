// submit.js (for submit.html)
import { addFavorite } from './favoritesManager.js';

const submitForm = document.getElementById('submit-form');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('recipe-name').value.trim();
    const imageUrl = document.getElementById('image-url').value.trim();
    const tutorial = document.getElementById('tutorial').value.trim();
    
    if (!name || !imageUrl || !tutorial) {
        alert('All fields are required.');
        return;
    }
    
    // Simple URL validation
    try {
        new URL(imageUrl);
    } catch {
        alert('Invalid Image URL.');
        return;
    }
    
    const recipe = {
        title: name,
        thumbnail: imageUrl,
        href: tutorial, // Treating tutorial as link for simplicity
        ingredients: '' // Not used
    };
    
    addFavorite(recipe);
    alert('Recipe submitted and added to favorites!');
    submitForm.reset();
});