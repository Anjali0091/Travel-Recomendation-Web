# Travel Recommendation App

## Overview
The Travel Recommendation App is a web application designed to help users find travel destinations based on their preferences. Users can select the type of place they want to visit, their budget, and the location, and the app will suggest suitable travel destinations.

## Project Structure
The project is divided into three main components:
- **Frontend**: Contains the user interface of the application.
- **Backend**: Handles the server-side logic and API endpoints.
- **Database**: Manages the database schema and data.

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm run start
   ```

### Database
- Ensure that the database is set up according to the schema defined in `database/schema.sql`.
- Use migration files in the `database/migrations` directory to manage schema changes.
- Seed the database with initial data using the files in the `database/seeds` directory.

## Usage Guidelines
- Users can interact with the frontend to select their travel preferences.
- The backend will process these preferences and return suitable travel recommendations.
- The application is designed to be user-friendly and responsive.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.