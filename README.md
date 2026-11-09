# MYStore 🛍️

A modern e-commerce web application built with React, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB.

## 🚀 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Router
- Axios
- ESLint

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Morgan
- bcryptjs
- npm

## ✨ Features

### Navigation & Layout

- Home page for displaying products
- Reusable Header and Footer components
- Desktop and mobile navigation
- Mega Menu with multiple shopping categories
- Category-specific promotional images
- Responsive navigation layout

### Product Features

- Reusable ProductCard component
- Product image component
- Product rating component
- Product data maintained in separate files
- Product Details screen
- Product information display
- Product quantity selector
- Quantity increment (+) functionality
- Quantity decrement (-) functionality

### Routing & Application

- React Router integration
- Client-side navigation and routing
- Product details navigation
- Custom 404 Error Page
- Reusable Layout components

### Backend Features

- Node.js and Express.js backend
- MongoDB database configuration
- Mongoose models for users, products, and orders
- Database seeder for dummy data
- Morgan middleware for HTTP request logging
- bcryptjs for password hashing
- Centralized Express error-handling middleware
- Organized backend folder structure
- Product controller functions
- Controller and route integration
- Separated controller logic from route definitions

### UI & Configuration

- Tailwind CSS styling
- Custom favicon and SVG icons
- Organized components, data, layouts, and screens
- Configured import aliases
- Responsive UI for desktop and mobile devices

## 📁 Project Structure

```text
mystore/
│
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── images/
│   │       ├── product-1.jpg
│   │       ├── product-2.jpg
│   │       ├── product-3.jpg
│   │       ├── product-4.jpg
│   │       ├── product-5.jpg
│   │       ├── product-6.jpg
│   │       ├── product-7.jpg
│   │       ├── product-8.jpg
│   │       ├── product-9.jpg
│   │       ├── product-10.jpg
│   │       └── category images
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer/
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── Header/
│   │   │   │   ├── MegaMenu/
│   │   │   │   │   ├── AccessoriesMenuDisplay.jsx
│   │   │   │   │   ├── AllCategoriesMenuDisplay.jsx
│   │   │   │   │   ├── CategoryImageBox.jsx
│   │   │   │   │   ├── CollectionsMenuDisplay.jsx
│   │   │   │   ├── KidsMenuDisplay.jsx
│   │   │   │   ├── LinkItem.jsx
│   │   │   │   ├── MegaMenuItem.jsx
│   │   │   │   ├── MenMenuDisplay.jsx
│   │   │   │   ├── SaleMenuDisplay.jsx
│   │   │   │   ├── ShoesMenuDisplay.jsx
│   │   │   │   ├── WatchesMenuDisplay.jsx
│   │   │   │   ├── WomenMenuDisplay.jsx
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── DesktopMenu.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── MenuItem.jsx
│   │   │   ├── MenuItemMobile.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── MobileMenuIcon.jsx
│   │   │   ├── MobileSearchBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Layout/
│   │   │   └── index.jsx
│   │   │
│   │   └── ProductCard/
│   │       ├── CardImage.jsx
│   │       ├── Rating.jsx
│   │       └── index.jsx
│   │
│   ├── data/
│   ├── screens/
│   │   ├── Error/
│   │   │   └── index.jsx
│   │   ├── Home/
│   │   │   └── index.jsx
│   │   └── ProductDetails/
│   │       ├── QuantitySelector.jsx
│   │       └── index.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.config.js
│   │
│   ├── controllers/
│   │   └── product.controller.js
│   │
│   ├── data/
│   │   ├── products.data.js
│   │   └── users.data.js
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── product.route.js
│   │
│   ├── main.js
│   └── seeder.js
│
├── jsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Development Setup

- Vite development server
- Development port: `3000`
- Tailwind CSS configured with Vite
- Custom MYStore favicon and page title
- Configured import aliases using `jsconfig.json` and `vite.config.js`
- Initialized Node.js backend using npm
- Installed Express.js
- Created backend entry point: `server/main.js`
- Configured frontend-backend communication using Axios
- Configured Vite proxy for backend API requests
- Organized backend configuration, data, models, routes, and middlewares
- Created separate Mongoose models for users, products, and orders
- Configured MongoDB database connection
- Added centralized Express error handling
- Created product controller functions
- Connected product controllers with product routes
- Added controllers path alias in `jsconfig.json`
- Updated `package.json` imports configuration

## 🔄 Recent Changes

### Step 3 — Completed: Import Aliases & Component Setup

- Configured the `@components` import alias.
- Created reusable Header components.
- Created Footer component.
- Integrated Header and Footer into `App.jsx`.
- Organized components into separate files.

### Step 4 — Completed: Mega Menu

- Created reusable Mega Menu components.
- Added category navigation for Men, Women, Kids, Shoes, Watches, Accessories, Collections, and Sale.
- Created `CategoryImageBox.jsx`.
- Created `LinkItem.jsx`.
- Created `MegaMenuItem.jsx`.
- Added category-specific promotional images.
- Improved Mega Menu layout using Tailwind CSS.

### Step 5 — Completed: Home Page & Product Cards

- Created Home page.
- Created reusable ProductCard component.
- Created `CardImage.jsx`.
- Created `Rating.jsx`.
- Added product information in separate data files.
- Added product and category images.
- Organized product components, data, and screens.

### Step 6 — Completed: React Router Integration

- Updated React Router dependency.
- Configured application routing in `App.jsx`.
- Implemented client-side navigation.
- Created custom 404 Error Page.
- Created reusable Layout components.
- Updated Header navigation components.
- Updated ProductCard navigation.

### Step 7 — Completed: Product Details Page

- Created Product Details screen.
- Implemented product details navigation.
- Added product information display.
- Added product quantity selector.
- Implemented quantity increment functionality.
- Implemented quantity decrement functionality.
- Improved Product Details UI using Tailwind CSS.

### Step 8 — Completed: Backend Setup

- Initialized Node.js backend using `npm init`.
- Generated `package.json` and `package-lock.json`.
- Installed Express.js.
- Created the `server` directory.
- Created `server/main.js` as the backend entry point.
- Created backend data directory.
- Started separating frontend and backend responsibilities.
- Organized initial backend project structure.

### Step 12 — Completed: Axios Integration & Frontend-Backend Connection

- Installed Axios in the client.
- Configured proxy settings in `vite.config.js`.
- Updated frontend screens to fetch product data from backend API endpoints.
- Integrated frontend components with backend APIs.
- Implemented dynamic data fetching instead of static product data.
- Improved communication between React frontend and Express backend.

### Step 14 — Completed: Configure Absolute Path Imports

- Installed `@babel/preset-env`.
- Created `.babelrc` configuration file.
- Added `jsconfig.json` for absolute path support.
- Added `imports` property in `package.json`.
- Updated import statements.
- Improved project structure and simplified module imports.

### Step 15 — Completed: Backend Configuration & Mongoose Models

- Updated backend project configuration.
- Renamed database configuration file to `db.config.js`.
- Renamed `products.js` to `products.data.js`.
- Created a dedicated `models` directory.
- Created `order.model.js`.
- Created `product.model.js`.
- Created `user.model.js`.
- Updated `server/main.js`.
- Updated `jsconfig.json` and `package.json`.

### Step 16 — Completed: Logging

- Integrated Morgan middleware for HTTP request logging.
- Configured request logging to monitor incoming HTTP requests.
- Improved backend debugging and request tracking.

### Step 17 — Completed: Backend Updates

- Installed bcryptjs for password hashing.
- Removed hardcoded IDs from product objects.
- Added dummy user data for development and testing.

### Step 18 — Completed: Database Seeder and Configuration Updates

- Created a database seeder file to populate MongoDB with dummy data.
- Installed the `colors` package for colored console output.
- Tested database seeding with local MongoDB.
- Updated scripts in `package.json`.
- Added models folder to `jsconfig.json`.
- Configured package imports.
- Renamed `products.js` to `products.data.js`.
- Renamed `users.js` to `users.data.js`.

### Step 21 — Completed: Express Error Handling Middleware

- Created centralized Express error-handling middleware.
- Updated `server/main.js` to use the error handler.
- Modified `product.route.js` to throw errors.
- Added the middlewares folder path to `jsconfig.json`.
- Updated `package.json` import configuration.
- Improved backend error handling and maintainability.

### Step 22 — Completed: Product Controller Setup

- Created a new `controllers` folder inside the server directory.
- Created `product.controller.js` to manage product-related controller functions.
- Connected product controller functions with the product route file.
- Added controllers folder path to `jsconfig.json`.
- Updated `package.json` imports configuration.
- Separated controller logic from route definitions.
- Improved backend code organization and maintainability.

## 🛠️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- MongoDB

### Clone Repository

```bash
git clone https://github.com/shubham-es6/mystore.git

cd mystore
```

### Backend Setup

From the root directory:

```bash
npm install
```

Configure your MongoDB connection string in the backend environment configuration.

Start the backend using the configured npm script in the root `package.json`.

### Frontend Setup

Open a new terminal:

```bash
cd client

npm install

npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 📌 Project Status

MYStore is under active development.

### Completed

- Home Page
- Reusable Header and Footer
- Desktop and Mobile Navigation
- Mega Menu with Shopping Categories
- Reusable Product Cards
- Product Rating Component
- React Router Integration
- Custom 404 Error Page
- Product Details Screen
- Product Quantity Selector
- Quantity Increment and Decrement Functionality
- Initial Express.js Backend Setup
- Product Data Migration to Backend
- Axios Integration
- Frontend-Backend API Communication
- Absolute Path Import Configuration
- Backend Configuration Structure
- Mongoose User Model
- Mongoose Product Model
- Mongoose Order Model
- Database Seeder
- Morgan HTTP Request Logging
- Centralized Express Error Handling Middleware
- Product Controller Setup
- Controller and Route Integration
- Controllers Path Alias Configuration

### Upcoming Features

- Complete Express Product API
- Add to Cart functionality
- Shopping Cart Page
- Remove Products from Cart
- Wishlist functionality
- User Authentication
- Product Search
- Product Filtering and Sorting
- Checkout Page
- Payment Gateway Integration
- Order Management

More e-commerce features will be developed in upcoming steps.

---

**Developed with ❤️ using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.**
