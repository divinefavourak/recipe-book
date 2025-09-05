# Recipe Book - README

![Recipe Book](https://img.shields.io/badge/Recipe-Book-orange) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

A modern, responsive web application for discovering, saving, and sharing delicious recipes from around the world with a focus on Nigerian cuisine.

## 🌟 Features

- **Recipe Search**: Find recipes by name or ingredients
- **Favorites System**: Save your favorite recipes for quick access
- **Recipe Submission**: Share your own recipes with the community
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Nigerian Cuisine Focus**: Specialized in authentic Nigerian dishes
- **Firebase Integration**: Real-time data storage and user authentication

## 🚀 Live Demo

Check out the live application here: [Recipe Book Demo](https://divinefavourak.github.io/recipe-book/)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Firestore, Authentication)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages

## 📦 Installation

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/divinefavourak/recipe-book.git
```

2. Navigate to the project directory:
```bash
cd recipe-book
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🔧 Firebase Setup

To connect your own Firebase project:

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database and Authentication (Anonymous sign-in)
3. Replace the Firebase configuration in the code with your own:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

## 📁 Project Structure

```
recipe-book/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── assets/             # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript modules
│   └── images/        # Image files
└── firebase/          # Firebase configuration and utilities
```

## 🎯 Usage

1. **Browse Recipes**: Visit the homepage to see popular recipes
2. **Search**: Use the search bar to find specific recipes
3. **Save Favorites**: Click the heart icon to save recipes to your favorites
4. **Submit Recipes**: Use the "Submit Recipe" form to share your own recipes
5. **View Favorites**: Access your saved recipes from the Favorites page

## 👥 Team Members

- Divinefavour Akhimien - Project Lead & Developer

## 📋 Future Enhancements

- User authentication and personalized accounts
- Recipe categories and filtering
- Dark mode toggle
- Recipe rating and review system
- Meal planning functionality
- Shopping list generation
- Social sharing features
- Advanced search filters (by cuisine, dietary restrictions, etc.)

## 🤝 Contributing

We welcome contributions to the Recipe Book project! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

Please ensure your code follows the existing style and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports and Feature Requests

If you encounter any bugs or have feature requests, please open an issue on the [GitHub Issues page](https://github.com/divinefavourak/recipe-book/issues).

## 🙏 Acknowledgments

- Unsplash for providing beautiful food photography
- Firebase team for the excellent backend platform
- Nigerian culinary experts for recipe inspiration

---

<div align="center">
Made with ❤️ by Group 8
</div>