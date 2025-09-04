# 🎬 MovieRecs - A Personalized Movie Recommendation Hub

MovieRecs is a web application designed to provide a rich, personalized movie discovery experience. Users can create accounts, build custom movie playlists, rate movies, and receive tailored recommendations.

## Tech Stack

- **Backend:** Django, Django REST Framework
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Database:** SQL (using Django's default SQLite for development)
- **External APIs:**
  - The Movie Database (TMDb)
  - YouTube Data API
  - Spotify Web API

## Project Roadmap

---
### **Phase 1: The Core Movie Browser (MVP)**
*Goal: Build a functional, anonymous movie discovery site.*

1.  **Backend Setup:**
    -   Initialize Django project.
    -   Create a `Movie` model to store cached movie data.
    -   Build an API endpoint to search TMDb for movies.
    -   Build an API endpoint to get detailed movie info (including YouTube trailer and Spotify soundtrack links).
2.  **Frontend Setup:**
    -   Initialize React project with Tailwind CSS.
    -   Build the **Hero Page** (landing page) with a prominent search bar.
    -   Build the **Search Results Page**.
    -   Build the **Movie Detail Page** to display all information, including the embedded trailer and soundtrack.

---
### **Phase 2: User Accounts & Playlists**
*Goal: Allow users to sign up, log in, and curate their own movie lists.*

1.  **Backend User System:**
    -   Set up Django's built-in User model.
    -   Create `Playlist` and `PlaylistItem` models in the database, linked to users.
    -   Build API endpoints for user registration, login, and logout (e.g., using JWT tokens).
    -   Build secure API endpoints for creating, viewing, and editing playlists.
2.  **Frontend User System:**
    -   Build the **Registration Page** and **Login Page**.
    -   Implement state management in React to handle user authentication status.
    -   Build the **Playlist Page**, where a logged-in user can see and manage their playlists.
    -   Add "Add to Playlist" functionality on the Movie Detail Page.

---
### **Phase 3: Personalization & Engagement**
*Goal: Make the experience unique and interactive for each user.*

1.  **Backend Features:**
    -   Add `Rating` and `Review` models to the database.
    -   Build API endpoints for users to rate and review movies.
2.  **Frontend Features:**
    -   Build the **Profile Page** for users to manage their account.
    -   Build the personalized **Dashboard** for logged-in users.
    -   Implement the rating/review system on the Movie Detail Page.
    -   (Optional) Begin work on the **AI-Bot / User Guide** feature.

---
```eof

This phased approach allows us to focus on one major piece of functionality at a time. We'll get a working product in Phase 1, and then make it powerful and personalized in the subsequent phases.

What do you think of this more detailed plan? Does it capture your vision for the project? If you're happy with this, we can officially begin with **Phase 1, Step 1: Backend Setup**.