# Mobile Shop Frontend

This is a single-page application (SPA) built with React that simulates a mobile e-commerce platform.

It includes two main views:

* **Product List Page (PLP):** Displays all available products with real-time search filtering by brand and model.
* **Product Detail Page (PDP):** Shows detailed information about a selected product, including specifications, selectable options (color and storage), and an add-to-cart action.

### Key Features

* Client-side routing using React Router
* Global cart state management using React Context
* Persistent cart counter stored in localStorage
* Client-side caching of API responses with 1-hour expiration
* Responsive product grid layout (up to 4 items per row)
* Real-time search filtering

### Tech Stack

* React (with Hooks)
* React Router
* Axios
* Vanilla CSS

### Notes

The application uses a client-side caching strategy to reduce unnecessary API calls and improve performance. Cart state is persisted locally to ensure consistency across page reloads.

## Getting Started

```bash
npm install
npm run dev