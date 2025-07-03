# PhoenixLabs Backend

A Node.js/Express backend for managing users, authentication, dashboards, and shipment data, using MongoDB and TypeScript.

## Features

- **User Authentication:** Register and login with JWT-based authentication.
- **User Dashboard:** Secure dashboard endpoint for user data.
- **Shipments:** Manage and retrieve user-specific shipment records.
- **MongoDB Integration:** Uses Mongoose for data modeling.
- **TypeScript:** Type-safe codebase with custom types.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/BHARATHKUMARREDDY2004/Phoenixlabs-Server.git
   cd Phoenixlabs-Server
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory with the following content:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The server will start on the port specified in your `.env` file (default: 5000).
5. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

## Project Structure

```
src/
  app.ts                # Express app setup and route mounting
  server.ts             # Entry point, starts server and connects to DB
  config/db.ts          # MongoDB connection logic
  controllers/          # Route handlers for auth, dashboard, shipments
  middleware/           # Authentication middleware (JWT)
  models/               # Mongoose models for User and Shipment
  routes/               # Express route definitions
  types/                # Custom TypeScript type definitions
  utils/                # Utility functions (e.g., JWT token generation)
```

## Main Endpoints

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive JWT
- `GET /api/dashboard` – Get user dashboard (protected)
- `GET /api/shipments` – Get user shipments (protected)

## Scripts

- `npm run dev` – Start in development mode with hot reload
- `npm run build` – Compile TypeScript to JavaScript
- `npm start` – Start the compiled server
- `npm run prod` – Build and start in production

## Environment Variables

Create a `.env` file with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Dependencies

- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
- TypeScript & type definitions

---
