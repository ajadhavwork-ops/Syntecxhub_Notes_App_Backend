# 📝 Notes App Backend API

A RESTful Notes Management Backend built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project allows users to create accounts, manage notes, update them, archive notes, and retrieve notes associated with specific users.

---

## 🚀 Features

### 👤 User Management
- Create a new user
- Get all users
- Get user by ID

### 📝 Notes Management
- Create a new note
- Get all notes
- Get note by ID
- Update a note
- Archive a note (Soft Delete)
- Get all notes of a specific user

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## 📁 Project Structure

```text
Notes_App_Backend/
│
├── controllers/
│   ├── userController.js
│   └── noteController.js
│
├── models/
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── userRoutes.js
│   └── noteRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/Notes_App_Backend.git
```

Move into the project folder

```bash
cd Notes_App_Backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 📌 API Endpoints

### User Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/users` | Create User |
| GET | `/users` | Get All Users |
| GET | `/users/:id` | Get User By ID |
| GET | `/users/:id/notes` | Get Notes of User |

---

### Note Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/notes` | Create Note |
| GET | `/notes` | Get All Notes |
| GET | `/notes/:id` | Get Note By ID |
| PUT | `/notes/:id` | Update Note |
| PATCH | `/notes/:id/archive` | Archive Note |

---

## 📄 Example Request

### Create User

```json
{
    "name": "Aditya",
    "email": "aditya@gmail.com"
}
```

---

### Create Note

```json
{
    "title": "Shopping List",
    "content": "Milk, Bread, Eggs",
    "user": "USER_ID"
}
```

---

## 🗂 Database Schema

### User

```javascript
{
    name: String,
    email: String
}
```

### Note

```javascript
{
    title: String,
    content: String,
    user: ObjectId,
    isArchived: Boolean
}
```

---

## 📚 Concepts Practiced

- REST API Development
- MVC Architecture
- Express Routing
- Controllers
- Mongoose Models
- MongoDB Relationships
- Populate()
- CRUD Operations
- Soft Delete (Archive)
- Error Handling
- Async/Await
- HTTP Status Codes
- Environment Variables

---

## 🔮 Future Improvements

- User Authentication (JWT)
- Login & Signup
- Password Hashing (bcrypt)
- Input Validation
- Search Notes
- Pagination
- Delete Note Permanently
- Restore Archived Notes
- Unit Testing
- Swagger API Documentation

---

## 👨‍💻 Author

**Aditya Shivaji Jadhav**

- GitHub: https://github.com/ajadhavwork-ops
- LinkedIn: https://www.linkedin.com/in/aditya-jadhav/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
