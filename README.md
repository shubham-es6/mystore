# MYStore 🛍️

A modern e-commerce web application built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Router
- ESLint

## ⚙️ Development Setup

- Vite development server
- Development port: `3000`
- Tailwind CSS configured with Vite
- Custom MYStore favicon and page title
- Configured import aliases using `jsconfig.json` and `vite.config.js`

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

### UI & Configuration
- Tailwind CSS styling
- Custom favicon and SVG icons
- Organized components, data, layouts, and screens
- Configured import aliases

## 📁 Project Structure

```text
mystore/
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
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer/
│   │   │   │   └── index.jsx
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
│   │   │   ├── DesktopMenu.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── MenuItem.jsx
│   │   │   ├── MenuItemMobile.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── MobileMenuIcon.jsx
│   │   │   ├── MobileSearchBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── index.jsx
│   │   ├── Layout/
│   │   │   └── (Layout components)
│   │   ├── ProductCard/
│   │   │   ├── CardImage.jsx
│   │   │   ├── Rating.jsx
│   │   │   └── index.jsx
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── screens/
│   │   │   ├── Error/
│   │   │   │   └── (404 Error Page)
│   │   │   ├── Home/
│   │   │   │   └── index.jsx
│   │   │   └── ProductDetails/
│   │   │       └── index.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md

```

## 🔄 Recent Changes

### Step 3 — Completed

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

### Step 4 — Completed

- Created reusable Mega Menu components.
- Added category navigation for Men, Women, Kids, Shoes, Watches, Accessories, Collections, and Sale.
- Created `CategoryImageBox.jsx` for promotional category images.
- Created `LinkItem.jsx` for reusable navigation links.
- Created `MegaMenuItem.jsx` for Mega Menu items.
- Added category-specific promotional images.
- Improved Mega Menu layout and styling using Tailwind CSS.
- Organized Mega Menu components into a dedicated directory.
- Updated navigation styling for a consistent user interface.

### Step 5 — Completed

- Created the Home page in `src/screens/Home/index.jsx`.
- Created a reusable `ProductCard` component.
- Created `CardImage.jsx` to display product images.
- Created `Rating.jsx` for product ratings.
- Added product information in `src/data/products.js`.
- Added product images and category images to `public/images/`.
- Organized product components, data, and screens into separate directories.
- Updated `App.jsx` for the application structure.
- Updated project configuration and dependencies as required.

### Step 6 — Completed

- Updated React Router dependency to the latest project version.
- Configured application routing in `App.jsx`.
- Implemented client-side navigation.
- Created a custom 404 Error Page.
- Added Error screen components in `src/screens/Error/`.
- Created reusable Layout components in `src/components/Layout/`.
- Updated Header navigation components for routing integration.
- Updated ProductCard navigation.
- Improved application navigation and route handling.

### Step 7 — Completed

- Created a Product Details screen.
- Implemented product details page navigation.
- Added product information display.
- Added product quantity selector.
- Implemented quantity increment (+) functionality.
- Implemented quantity decrement (-) functionality.
- Improved Product Details page UI using Tailwind CSS.
- Organized Product Details screen components for better maintainability.

## 🛠️ Installation and Setup

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
2. Navigate to the client directory.
3. Install the dependencies.
4. Start the development server.

```bash
git clone https://github.com/shubham-es6/mystore.git
cd mystore/client
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

### Upcoming Features

- Add to Cart functionality
- Shopping Cart Page
- Remove Products from Cart
- Wishlist functionality
- User Authentication
- Product Search
- Product Filtering and Sorting
- Backend API Integration
- Checkout Page
- Payment Gateway Integration
- Order Management

More e-commerce features will be developed in upcoming steps.

---

**Developed with ❤️ using React.js and Tailwind CSS.**