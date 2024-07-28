# Auto Spares Shop

This is a web application for an auto spares shop that includes features such as stock management, product listings, service descriptions, and contact information.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- **Home Page:** Welcome message, shop information, and a call-to-action button.
- **Products Page:** List of products with images, names, prices, and available quantities.
- **Stock Management:** Form to add and deduct stock, including image upload for products.
- **Services Page:** Description of available services with images.
- **Contact Page:** Contact information, a form to send messages, and a Google Maps location.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/auto-spares-shop.git
    ```

2. Navigate to the project directory:

    ```bash
    cd auto-spares-shop
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
auto-spares-shop/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/ 
│   │   ├──img/
                ├── wheel-aligniment.jpeg
│   │           ├── body-repair.jpg
│   │           ├── electric-repair.jpg
│   │           ├── tire-repair.jpg
│   │           ├── engine-repair.jpg
│   │           └── wheel-balance.jpg
|   |    ├──css/
|   |            ├──
│   │
│   ├── components/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Products.js
│   │   ├── Products.css
│   │   ├── StockManagement.js
│   │   ├── StockManagement.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   │
│   ├── StockContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
└── package.json
```

## License

This project is licensed under the MIT License.

---

## Additional Information

### Home Page

The home page welcomes visitors with a hero section containing a background image, a heading, a brief description, and a call-to-action button.

### Products Page

The products page displays a list of available products with their images, names, prices, and quantities. The stock quantity is updated dynamically based on stock management operations.

### Stock Management

Stock management allows users to add new stock or deduct stock quantities. The form includes fields for the product name, quantity, actual price, selling price, and image upload (JPEG, JPG, or PNG).

### Services Page

The services page describes the various services offered by the shop, including wheel alignment, wheel balance, car tire repair, engine repair, body repair, and electrical repair. Each service is represented with an image.

### Contact Page

The contact page provides the shop's address, phone numbers, and email address. It also includes a form for visitors to send messages and a Google Maps iframe to display the shop's location.

---
