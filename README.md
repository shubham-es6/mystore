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
- npm

## ⚙️ Development Setup

- Vite development server
- Development port: `3000`
- Tailwind CSS configured with Vite
- Custom MYStore favicon and page title
- Configured import aliases using `jsconfig.json` and `vite.config.js`
- Initialized Node.js backend using `npm init`
- Installed Express.js
- Created backend entry point: `server/main.js`
- Configured frontend-backend communication using Axios
- Configured Vite proxy for backend API requests
- Organized backend configuration, data, and models
- Created separate Mongoose models for users, products, and orders

## ✨ Features

### Navigation & Layout

- Home page for displaying products
- Reusable Header and Footer components
- Desktop and mobile navigation components
- Mega Menu with multiple shopping categories
- Category-specific promotional images
- Responsive navigation layout

### Product Features

- Reusable ProductCard component
- Product image component
- Product rating component
- Product data maintained in a separate file
- Product Details screen
- Product information display
- Product quantity selector
- Quantity increment (+) functionality
- Quantity decrement (-) functionality

### Routing & Application

- React Router integration
- Client-side navigation and routing
- Product details navigation
- Custom 404 Error Page for undefined routes
- Reusable Layout components

### Backend Features

- Node.js and Express.js backend setup
- Organized backend configuration
- Separate product data file
- Mongoose models for users, products, and orders
- Database configuration file
- Organized backend folder structure

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
├── server/
│   ├── config/
│   │   └── db.config.js
│   │
│   ├── data/
│   │   └── products.data.js
│   │
│   ├── models/
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   └── main.js
│
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── product-1.jpg
│   │   │   ├── product-2.jpg
│   │   │   ├── product-3.jpg
│   │   │   ├── product-4.jpg
│   │   │   ├── product-5.jpg
│   │   │   ├── product-6.jpg
│   │   │   ├── product-7.jpg
│   │   │   ├── product-8.jpg
│   │   │   ├── product-9.jpg
│   │   │   ├── product-10.jpg
│   │   │   └── category images
│   │   │
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   │   ├── MegaMenu/
│   │   │   │   ├── DesktopMenu.jsx
│   │   │   │   ├── Logo.jsx
│   │   │   │   ├── MenuItem.jsx
│   │   │   │   ├── MenuItemMobile.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   ├── MobileMenuIcon.jsx
│   │   │   │   ├── MobileSearchBar.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── Layout/
│   │   │   └── ProductCard/
│   │   │       ├── CardImage.jsx
│   │   │       ├── Rating.jsx
│   │   │       └── index.jsx
│   │   │
│   │   ├── data/
│   │   ├── screens/
│   │   │   ├── Error/
│   │   │   ├── Home/
│   │   │   └── ProductDetails/
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── eslint.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── index.html
│   └── vite.config.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 Recent Changes

### Step 3 — Completed: Import Aliases & Component Setup

- Configured the `@components` import alias in `jsconfig.json` and `vite.config.js`.
- Created reusable Header components:
  - `DesktopMenu`
  - `Logo`
  - `MenuItem`
  - `MenuItemMobile`
  - `MobileMenu`
  - `MobileMenuIcon`
  - `MobileSearchBar`
  - `SearchBar`
- Created the Footer component.
- Integrated Header and Footer components into `App.jsx`.
- Organized Header components into separate files for better maintainability.

### Step 4 — Completed: Mega Menu

- Created reusable Mega Menu components.
- Added category navigation for Men, Women, Kids, Shoes, Watches, Accessories, Collections, and Sale.
- Created `CategoryImageBox.jsx` for promotional category images.
- Created `LinkItem.jsx` for reusable navigation links.
- Created `MegaMenuItem.jsx` for Mega Menu items.
- Added category-specific promotional images.
- Improved Mega Menu layout and styling using Tailwind CSS.
- Organized Mega Menu components into a dedicated directory.
- Updated navigation styling for a consistent user interface.

### Step 5 — Completed: Home Page & Product Cards

- Created the Home page in `src/screens/Home/index.jsx`.
- Created a reusable `ProductCard` component.
- Created `CardImage.jsx` to display product images.
- Created `Rating.jsx` for product ratings.
- Added product information in `src/data/products.js`.
- Added product images and category images to `public/images/`.
- Organized product components, data, and screens into separate directories.
- Updated `App.jsx` for the application structure.
- Updated project configuration and dependencies as required.

### Step 6 — Completed: React Router Integration

- Updated React Router dependency.
- Configured application routing in `App.jsx`.
- Implemented client-side navigation.
- Created a custom 404 Error Page.
- Added Error screen components in `src/screens/Error/`.
- Created reusable Layout components in `src/components/Layout/`.
- Updated Header navigation components for routing integration.
- Updated ProductCard navigation.
- Improved application navigation and route handling.

### Step 7 — Completed: Product Details Page

- Created a Product Details screen.
- Implemented product details page navigation.
- Added product information display.
- Added product quantity selector.
- Implemented quantity increment (+) functionality.
- Implemented quantity decrement (-) functionality.
- Improved Product Details page UI using Tailwind CSS.
- Organized Product Details screen components for better maintainability.

### Step 8 — Completed: Backend Setup

- Initialized Node.js backend using `npm init`.
- Generated `package.json` and `package-lock.json`.
- Installed Express.js.
- Created the `server` directory.
- Created `server/main.js` as the backend entry point.
- Created `server/data` directory.
- Moved product data from frontend to `server/data/products.js`.
- Started separating frontend and backend responsibilities.
- Organized the initial backend project structure.

### Step 12 — Completed: Axios Integration & Frontend-Backend Connection

- Installed Axios in the client for making HTTP requests.
- Configured proxy settings in `vite.config.js` to connect the frontend with the backend.
- Updated frontend screens to fetch product data from backend API endpoints.
- Integrated frontend components with backend APIs.
- Implemented dynamic data fetching instead of using static product data.
- Improved communication between the React frontend and Express backend.

### Step 14 — Completed: Configure Absolute Path Imports

- Installed `@babel/preset-env` as a development dependency.
- Created `.babelrc` configuration file.
- Added `jsconfig.json` to configure absolute path support.
- Added the `imports` property in `package.json`.
- Updated import statements in the main application file.
- Improved project structure and simplified module imports.

### Step 15 — Completed: Backend Configuration & Mongoose Models

- Updated backend project configuration.
- Renamed `db.js` to `db.config.js` for database configuration.
- Renamed `products.js` to `products.data.js` for better file organization.
- Created a dedicated `models` directory inside the server folder.
- Created `order.model.js` for managing order data.
- Created `product.model.js` for managing product data.
- Created `user.model.js` for managing user data.
- Updated `server/main.js` to support the new backend structure.
- Updated `jsconfig.json` and `package.json`.
- Improved backend code organization and maintainability.

## 🛠️ Installation and Setup

### Prerequisites

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

```bash
npm install
```

Configure your MongoDB connection string in your environment configuration before starting the backend.

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Open the local URL shown in your terminal to view the application.

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

### Upcoming Features

- Complete Express Product API
- Add to Cart functionality
- Shopping Cart Page
- Remove Products from Cart
- Wishlist functionality
- User Authentication
- Product Search
- Product Filtering and Sorting
- MongoDB Database Connection and Integration
- Checkout Page
- Payment Gateway Integration
- Order Management

More e-commerce features will be developed in upcoming steps.

---

**Developed with ❤️ using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.**
