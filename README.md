# NZZ FastFood

A responsive fast-food storefront built with React (Vite, JSX), Tailwind CSS, Framer Motion, Lucide React, and an Express REST API.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Run locally

From the project root:

```bash
npm run install:all
npm run dev
```

Open **http://localhost:5173**. The API runs at **http://localhost:4000**.

You can also install and run each app separately:

```bash
cd server && npm install && npm run dev
# in another terminal
cd client && npm install && npm run dev
```

## Features
- Responsive dark/orange NZZ brand UI with animated hero and daily combo strip
- Searchable menu categories and animated product cards
- Item customization (size, sauce, cheese and toppings)
- Cart drawer, quantity controls, promo code `NZZ50` (15% off)
- Checkout with address/customer fields and simulated payment choices
- Simulated order confirmation and status progression
- Interactive custom burger builder with live pricing
- Simulated login/signup and browser-local profile/order history
- Express endpoints: `GET /api/menu`, `POST /api/orders`, `GET /api/orders/:id`, `POST /api/promos/verify`, `GET /api/health`

## Important demo limitations
- Orders are stored in server memory and are cleared when the API restarts.
- Login/signup is a frontend-only demo; it does not create secure accounts.
- Card and Apple/Google Pay choices are simulations. No payment details are collected and no real charge is made.
- For production, add a database, secure authentication, server-side price calculation, validation/rate limiting, order notifications, and a PCI-compliant payment provider.

## Project structure

```text
nzz-fastfood/
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── components/   # Navbar, Hero, MenuCard, CartDrawer, builder, modals
│   │   ├── data/menu.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── vite.config.js
├── server/
│   └── server.js
└── package.json
```
