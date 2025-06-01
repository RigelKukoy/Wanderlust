# 🌍 VacationVerse — Social Travel Discovery App

**Wanderlust** is a social web application designed to help users discover trendy local places and share their travel experiences. It combines maps, real-time location data, and a social media-style feed, enabling users to explore nearby attractions, see what others are doing, and contribute their own stories and recommendations.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [📦 APIs Used](#-apis-used)

## ✨ Features

Wanderlust offers a range of features to enhance your travel discovery and sharing experience:

### 🗺️ Discover

- See trendy places and activities based on your current location.
- Utilizes the Foursquare API to fetch relevant and up-to-date place information.
- Search and filter places by category or keyword to find exactly what you're looking for.

### 🧵 Place Timelines

- Each place has its own dedicated "social feed" or timeline.
- Users can post text updates, upload photos, and share their experiences related to specific locations.

### ❤️ Social Actions

- Like posts from other users to show appreciation.
- Bookmark your favorite places for easy access later.
- Discover popular places based on community interactions and engagement.

### 🔐 Authentication

- Securely sign up and log in using Supabase Auth.
- Manage your personal posts, liked content, and bookmarked places through your user profile.

## 🛠️ Tech Stack

This project is built using a modern and robust technology stack:

| Layer    | Technology                 | Description                                                           |
| -------- | -------------------------- | --------------------------------------------------------------------- |
| Frontend | Next.js                    | React framework for server-side rendering and static site generation. |
| Styling  | Tailwind CSS               | A utility-first CSS framework for rapid UI development.               |
| Backend  | Supabase                   | Open-source Firebase alternative for BaaS (Database, Auth, Storage).  |
| Database | PostgreSQL (via Supabase)  | Powerful, open-source object-relational database system.              |
| APIs     | Foursquare Places API      | For fetching location data, points of interest, and venue details.    |
| Maps     | Leaflet.js + OpenStreetMap | For displaying interactive maps and location pins.                    |
| Hosting  | Vercel / Supabase          | Platforms for deploying Next.js applications and Supabase backend.    |

## 📂 Project Structure

A brief overview of the project's directory layout:

- `/pages` → Contains Next.js page components, defining the application routes (e.g., `Home`, `Discover`, `Place/[id]`, `Profile`).
- `/components` → Houses reusable UI components used across various pages (e.g., `PostCard`, `PlaceCard`, `Map`).
- `/lib` → Includes utility functions, Supabase client initialization, and Foursquare API handler logic.
- `/styles` → Holds global CSS styles, Tailwind CSS configuration (`tailwind.config.js`), and any custom stylesheets.
- `/public` → Stores static assets like images, fonts, and favicons.

## 🚀 Getting Started

Follow these instructions to set up and run VacationVerse locally on your machine.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (LTS version recommended, e.g., v18.x or v20.x)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    Replace `yRigelKukoy` with the actual GitHub username or organization if this is a fork.

    ```bash
    git clone https://github.com/RigelKukoy/vacationverse.git
    cd vacationverse
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages defined in `package.json`.

    ```bash
    npm install
    ```

    Alternatively, if you prefer using Yarn:

    ```bash
    yarn install
    ```

3.  **Configure environment variables:**
    Create a `.env.local` file in the root directory of the project. Copy the contents of `.env.example` (if provided) or use the template below, replacing the placeholder values with your actual API keys and Supabase credentials.

    ```env
    # .env.local

    # Supabase Configuration
    # You can find these in your Supabase project settings
    NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-public-anon-key"

    # Foursquare API Configuration
    # You need to register on the Foursquare Developer portal to get an API key
    NEXT_PUBLIC_FOURSQUARE_API_KEY="your-foursquare-api-key"
    ```

    - **Important:** Never commit your `.env.local` file or any file containing sensitive credentials to version control. Ensure `.env.local` is listed in your `.gitignore` file.

4.  **Run the development server:**
    This command starts the Next.js development server, typically on port 3000.
    ```bash
    npm run dev
    ```
    Alternatively, with Yarn:
    ```bash
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## 📦 APIs Used

VacationVerse leverages several external APIs to provide its core functionalities:

- **Foursquare Places API:** Used to discover places, fetch details about venues (like categories, photos, tips), and find trending spots near the user.
- **Leaflet.js + OpenStreetMap:** Combined to display interactive maps, show place markers, and allow users to navigate geographical data visually. OpenStreetMap provides the map tiles.
- **Supabase:**
  - **Auth:** Manages user authentication (sign-up, log-in, user sessions).
  - **Database (PostgreSQL):** Stores application data such as user profiles, posts, likes, and bookmarks.
  - **Storage:** Used for storing user-uploaded media like photos for their posts.
  - **Realtime (optional):** Can be used for features like live updates or notifications.
