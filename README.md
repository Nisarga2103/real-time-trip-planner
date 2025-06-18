# 🌍 Real-Time Trip Planner

**Real-Time Trip Planner** is a collaborative, map-integrated travel planning app that helps users create, customize, and coordinate trips with ease. This full-stack web application features real-time chat, map-based destination selection, and activity planning — making it the ultimate travel planning tool.

---

## ✨ Key Features

- 🗺️ **Interactive Map:** Built using Leaflet + Nominatim API for location search and route planning.
- 💬 **Real-Time Chat:** Powered by Socket.IO for live communication with co-travelers.
- 🔍 **Destination Autocomplete:** Intelligent destination suggestions while typing.
- 📝 **Trip Form:** Add trip details, dates, dynamic activities, and more.
- 👫 **Collaboration:** Multiple users can co-plan and discuss trips in real-time.
- 🧳 **Trip Management:** Add/edit/view planned trips with MongoDB integration.

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Frontend     | ReactJS, Axios, Leaflet        |
| Backend      | Node.js, Express.js            |
| Real-time    | Socket.IO                      |
| Database     | MongoDB + Mongoose             |
| APIs Used    | Nominatim API, OpenRouteService|
| Tools        | VS Code, Postman, Docker (optional) |

---

## 📂 Folder Structure

```
real-time-trip-planner/
├── client/           # React frontend
│   ├── components/   # Header, TripForm, Chat, Map, TripList
│   └── App.js
├── server/           # Node.js + Express backend
│   ├── models/       # MongoDB Mongoose schemas
│   ├── routes/       # API endpoints
│   ├── sockets/      # Socket.IO logic
│   └── server.js
└── README.md
```

---

## 🚀 How to Run the Project

### ▶️ Frontend (React)
```bash
cd client
npm install
npm start
```

### ▶️ Backend (Node.js + MongoDB + Socket.IO)
```bash
cd server
npm install
node server.js
```

> Make sure MongoDB is running locally or configure your MongoDB Atlas URI.

---

## 🧠 Key Modules

### 🔹 Trip Schema (MongoDB)
```js
{
  destination: String,
  startDate: Date,
  endDate: Date,
  activities: [String],
  createdBy: String
}
```

### 🔹 Real-Time Chat (Socket.IO)
- Handles join/leave rooms
- Broadcasts messages instantly to all users

---

## 📍 Why This Project?

> Travel planning can be chaotic — this app solves that by allowing **real-time collaboration**, **location intelligence**, and a **smooth UX** for co-planning any trip. Whether it's a solo getaway or a group adventure, planning has never been this interactive.

---

## 👩‍💻 My Role

- ✅ Built full **frontend UI** using React + Leaflet + Nominatim API
- ✅ Designed and implemented **MongoDB schema and REST APIs**
- ✅ Developed **real-time backend** with Express + Socket.IO
- ✅ Integrated maps, destination search, trip creation, and activity forms
- ✅ Coordinated state management and form handling in React

---

