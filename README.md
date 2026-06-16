# lease-management-frontend
React.js frontend for Smart Lease Management Portal with dashboard, properties, tenants, leases and reports pages.

# Smart Lease Management Portal - Frontend

A React.js frontend application for managing properties, tenants, leases, and reports.

## Tech Stack

- React.js
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios
- React Router DOM
- React Icons

## Features

- Modern Login Page
- Admin Dashboard
- Sidebar Navigation
- Properties Page
- Tenants Page
- Leases Page
- Reports Page
- API integration using Axios
- Responsive UI

## Project Structure

src/
├── components/
│   └── Sidebar.jsx
├── Pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Properties.jsx
│   ├── Tenants.jsx
│   ├── Leases.jsx
│   └── Reports.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── style.css

## API Connection

The frontend connects to the ASP.NET Core Web API using Axios.

baseURL: "http://localhost:5251/api"
