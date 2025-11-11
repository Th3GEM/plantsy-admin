# 🌿 Plantsy Admin App
Plantsy Admin is a React-based admin dashboard built to manage a plant store's inventory. It connects to a local JSON server backend (port 6001) and demonstrates CRUD integration between a React frontend and a RESTful API. This project was created as part of a frontend coding challenge and is ideal for learning interactive admin UIs with local backend persistence.
Features
- View all plants in a clean list with images, names, prices, and availability
- Add new plants with a simple form (persisted to the JSON backend)
- Mark plants as sold out (toggle)
- Search plants by name (client-side filtering)
- Edit plant prices (PATCH)
- Delete plants with persistence across reloads
- Responsive layout and basic accessibility considerations

Tech highlights
- Frontend: React (functional components + hooks)
- Backend: json-server (local mock REST API running on port 6001)
- Data persistence: json-server's db.json
- State & side effects: useState, useEffect, and controlled forms

Requirements
- Node.js (recommended >= 14)
- npm (or yarn/pnpm)
- git

Quick start (local)
1. Clone the repository:
```bash
git clone https://github.com/Th3GEM/plantsy-admin.git
cd plantsy-admin
```

1. Install dependencies:
```bash
npm install
# or
# yarn install
```

1. Start the local JSON backend (json-server) and the React app:
```bash
# Start the backend (runs json-server on port 6001)
npm run server

# In a new terminal, start the frontend
npm start
```

4. Open the app:
- Frontend: http://localhost:3000
- Backend (json-server UI / API): http://localhost:6001

Backend API endpoints (json-server)
- GET /plants — fetch all plants
- GET /plants/:id — fetch a single plant
- POST /plants — add a new plant
- PATCH /plants/:id — update a plant (e.g., price, availability)
- DELETE /plants/:id — remove a plant

Example usage with curl:
```bash
# Get all plants
curl http://localhost:6001/plants

# Add a plant
curl -X POST http://localhost:6001/plants \
  -H "Content-Type: application/json" \
  -d '{"name":"Fiddle Leaf Fig","price":45,"image":"url","inStock":true}'

# Update a plant price
curl -X PATCH http://localhost:6001/plants/1 \
  -H "Content-Type: application/json" \
  -d '{"price":49.99}'

# Delete a plant
curl -X DELETE http://localhost:6001/plants/1
```

Project structure (example)
```
/public
/src
  /components
    PlantList.jsx
    PlantCard.jsx
    NewPlantForm.jsx
    SearchBar.jsx
  App.jsx
  index.jsx
db.json                 # json-server data file
package.json
```

Scripts (typical)
- npm start — start the React dev server (create-react-app / similar)
- npm run build — build for production
- npm run server — start json-server at port 6001 (e.g., json-server --watch db.json --port 6001)
- npm test — run tests (if present)
- npm run lint — run linters (if present)

Advanced behavior & notes
- The frontend uses React hooks for component state and side effects (useState, useEffect).
- All create, update, and delete operations are persisted to the json-server's db.json file so changes survive page reloads.
