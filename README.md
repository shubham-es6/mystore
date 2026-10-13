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

## 📁 Project Structure

```text
mystore/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── accessories-bags.jpg
│   │   │   ├── accessories-sunglasses.jpg
│   │   │   ├── collections-bestsellers.jpg
│   │   │   ├── collections-new-arrivals.jpg
│   │   │   ├── kids-boys.jpg
│   │   │   ├── kids-girls.jpg
│   │   │   ├── shoes-sneakers.jpg
│   │   │   ├── shoes-sports.jpg
│   │   │   ├── women-dresses-category.jpg
│   │   │   └── women-handbags-category.jpg
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer/
│   │   │   │   └── index.jsx
│   │   │   └── Header/
│   │   │       ├── MegaMenu/
│   │   │       │   ├── AccessoriesMenuDisplay.jsx
│   │   │       │   ├── AllCategoriesMenuDisplay.jsx
│   │   │       │   ├── CategoryImageBox.jsx
│   │   │       │   ├── CollectionsMenuDisplay.jsx
│   │   │       │   ├── KidsMenuDisplay.jsx
│   │   │       │   ├── LinkItem.jsx
│   │   │       │   ├── MegaMenuItem.jsx
│   │   │       │   ├── MenMenuDisplay.jsx
│   │   │       │   ├── SaleMenuDisplay.jsx
│   │   │       │   ├── ShoesMenuDisplay.jsx
│   │   │       │   ├── WatchesMenuDisplay.jsx
│   │   │       │   ├── WomenMenuDisplay.jsx
│   │   │       │   └── index.jsx
│   │   │       ├── DesktopMenu.jsx
│   │   │       ├── index.jsx
│   │   │       ├── Logo.jsx
│   │   │       ├── MenuItem.jsx
│   │   │       ├── MenuItemMobile.jsx
│   │   │       ├── MobileMenu.jsx
│   │   │       ├── MobileMenuIcon.jsx
│   │   │       ├── MobileSearchBar.jsx
│   │   │       └── SearchBar.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

## 🔄 Recent Changes

### Step 3 — Completed

- Added the `@components` alias in `jsconfig.json` and `vite.config.js`.
- Created reusable Header components:
  - `DesktopMenu`
  - `Logo`
  - `MenuItem`
  - `MenuItemMobile`
  - `MobileMenu`
  - `MobileMenuIcon`
  - `MobileSearchBar`
  - `SearchBar`
- Added the Footer component.
- Updated `App.jsx` to include Header and Footer components.

### Step 4 — Completed

- Created reusable Mega Menu components.
- Added category navigation for Men, Women, Kids, Shoes, Watches, Accessories, Collections, and Sale.
- Created `CategoryImageBox` for promotional category images.
- Created `LinkItem` for reusable navigation links.
- Added category-specific promotional images.
- Improved Mega Menu layout using Tailwind CSS.
- Organized Mega Menu components into a dedicated folder.
- Updated navigation styling for a consistent user interface.

