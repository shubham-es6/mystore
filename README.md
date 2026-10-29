# MYStore

A modern e-commerce web application built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- ESLint

## ⚙️ Development Setup

- Vite development server
- Development port: `3000`
- Tailwind CSS configured with Vite
- Custom MYStore favicon and page title
- Configured import aliases using `jsconfig.json` and `vite.config.js`

## ✨ Features

- Home page for displaying products
- Reusable Header and Footer components
- Desktop and mobile navigation components
- Mega Menu with multiple shopping categories
- Category-specific promotional images
- Reusable ProductCard component
- Product image component
- Product rating component
- Product data maintained in a separate file
- Organized components, data, and screens
- Tailwind CSS styling
- Custom favicon and SVG icons

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
│   │   │   │   │   ├── KidsMenuDisplay.jsx
│   │   │   │   │   ├── LinkItem.jsx
│   │   │   │   │   ├── MegaMenuItem.jsx
│   │   │   │   │   ├── MenMenuDisplay.jsx
│   │   │   │   │   ├── SaleMenuDisplay.jsx
│   │   │   │   │   ├── ShoesMenuDisplay.jsx
│   │   │   │   │   ├── WatchesMenuDisplay.jsx
│   │   │   │   │   ├── WomenMenuDisplay.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   ├── DesktopMenu.jsx
│   │   │   │   ├── Logo.jsx
│   │   │   │   ├── MenuItem.jsx
│   │   │   │   ├── MenuItemMobile.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   ├── MobileMenuIcon.jsx
│   │   │   │   ├── MobileSearchBar.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ProductCard/
│   │   │   │   ├── CardImage.jsx
│   │   │   │   ├── Rating.jsx
│   │   │   │   └── index.jsx
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── screens/
│   │   │   └── Home/
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
cd client
npm install
npm run dev
```

## 📌 Project Status

MYStore is under active development. The Home page, reusable UI components, Mega Menu, product cards, and product rating component have been added. More e-commerce functionality will be developed in upcoming steps.
