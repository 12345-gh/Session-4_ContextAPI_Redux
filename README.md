# Session 4. ContextAPI and Redux

## Task Description: Create an Application Using Popular Open APIs with React, Context API, and Redux Toolkit

### Objective:
Your task is to create a React application that interacts with one or more open and free APIs. The goal of this assignment is to practice working with external data, managing application state using Context API and Redux Toolkit, and building a functional user interface. You are free to use your creativity to decide on the application's purpose, structure, and features. No predefined design is required—let your imagination guide you!

### Requirements:
#### Core Functionalities:
- Choose one or more open and free APIs (e.g., OpenWeatherMap, OMDB API, SpaceX API, Pokémon API, or any other public API of your choice).
- Fetch data from the API(s) and display it in your application.
- Add Suspense in your code.
- Implement basic CRUD-like functionalities where applicable:
  - **Create**: Add items (e.g., favorites, saved data).
  - **Read**: Fetch and display data from the API.
  - **Update**: Optionally allow users to edit or interact with data locally.
  - **Delete**: Provide an option to remove or reset certain items (e.g., clear saved data).

#### State Management:
Use Context API and Redux Toolkit to manage the application's state.
Divide state responsibilities logically. For example:
- Use Context API for lightweight, global state (e.g., theme settings, user preferences).
- Use Redux Toolkit for handling more complex state, such as fetched data and user interactions.

#### Routing (Optional):
Implement React Router to create multiple pages or views for your application. For example:
- A homepage.
- A details page for specific data (e.g., movie details, weather for a selected city).
- A "favorites" or "saved items" page.

#### Error Handling:
Handle API errors gracefully. Display appropriate error messages if the API fails or data is unavailable.
Provide feedback for loading states (e.g., loading spinners or messages).

#### Reusable Components:
Create reusable components such as buttons, cards, lists, or forms to display the data.

#### Third-Party Libraries:
You can use any third-party libraries for specific functionalities (e.g., Axios for API calls, Moment.js for date formatting, or Lodash for utility functions).

### Guidelines:
- No Design Rules: The focus is on functionality, but feel free to style the app as you like.
- Modular Code: Organize your code into components and ensure good separation of concerns.
- API Key Management: If the API requires an API key, use environment variables to keep it secure.

### Optional Challenges:
- Add a search bar to filter or query data from the API.
- Implement pagination or infinite scrolling for large datasets.
- Allow users to toggle between light and dark themes.
- Cache API responses in Redux state to reduce redundant API calls.
- Use localStorage or sessionStorage to save user preferences or state (e.g., saved items, last-viewed page).
- Make the app responsive for different screen sizes.

### Examples of Open APIs:
- OpenWeatherMap - Weather data.
- OMDB API - Movie database.
- PokéAPI - Pokémon data.
- NASA API - Space-related data.
- REST Countries API - Information about countries.
- The Rick and Morty API - Characters and episodes.

Good luck, and have fun building your app! 🚀