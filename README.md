# Lease Management Frontend

## About the Project

This project is the frontend of a Lease Management System developed using React.js. The goal of the application is to provide a simple interface for managing properties, tenants, and lease information.

The application communicates with an ASP.NET Core Web API backend to retrieve and manage data stored in a SQL Server database.

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Bootstrap
* Axios
* React Router DOM


## Features

* User login page
* Dashboard
* Property management
* Tenant management
* Lease management
* Reports page
* Responsive user interface
* Integration with REST APIs

## Folder Structure
src
│
├── components
│   └── Sidebar.jsx
│
├── Pages
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Properties.jsx
│   ├── Tenants.jsx
│   ├── Leases.jsx
│   └── Reports.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── style.css


## API Integration

Axios is used to communicate with the backend Web API.

javascript
const api = axios.create({
    baseURL: "http://localhost:5251/api"
});

The frontend currently consumes the following APIs:

* Properties
* Tenants
* Leases

## Running the Project

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Future Improvements

Some features that can be added in the future include:

* User authentication using JWT
* Search and filtering
* Pagination
* File upload for lease documents
* Dashboard charts
* Role-based access control

