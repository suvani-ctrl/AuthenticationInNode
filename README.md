# 🚀 Node.js Authentication API

Welcome to the **AuthenticationInNode** project — a clean, beginner-friendly authentication API built using **Node.js**, **Express**, **MongoDB (Mongoose)**, **JWT**, and **bcryptjs**. 🔐✨

## 📁 Project Structure

```
Authentication/
├── controllers/        # Authentication logic (register, login)
├── database/           # MongoDB connection config
├── middleware/         # (For future custom middleware like auth checks)
├── models/             # Mongoose schemas (User model)
├── routes/             # API route definitions
├── .env                # Environment variables (secret keys, DB URI)
├── package.json        # Project metadata and dependencies
├── server.js           # Main server entry point
```

## ✨ Features

✅ User Registration  
✅ User Login with hashed passwords  
✅ JWT Token generation and validation  
✅ User roles (admin/user)  
✅ MongoDB integration using Mongoose  
✅ Neatly organized project structure  


## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` — Register a new user
- `POST /login` — Log in a user and receive a JWT token

### Home/Admin Routes (`/`)

- `GET /welcome` — Public welcome page
- `GET /admin-page` — Example admin-only page (protected in future updates)


## 🛠️ Technologies Used

- **Node.js** 🌿
- **Express** ⚡
- **MongoDB & Mongoose** 🍃
- **bcryptjs** 🔒
- **jsonwebtoken** 🛡️


## ⚙️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/suvani-ctrl/AuthenticationInNode.git
cd AuthenticationInNode
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

4. **Run the server**
```bash
nodemon server.js
```

5. **Test with Postman or cURL** 🎨


## 📌 Notes

- Passwords are hashed using **bcryptjs** before being saved in the database.
- JWT tokens are generated on login and can be used for authenticated routes.
- `iat` in JWT payload stands for **Issued At** (timestamp when the token was created).
- You can extend the `/middleware` directory to add custom authentication middlewares later.


## 📚 Learnings

- REST API fundamentals 📖
- MongoDB document modeling 📄
- JWT token handling 🔑
- Environment variable management 🔐


## 📸 Screenshots (optional)
![image](https://github.com/user-attachments/assets/78905d09-053c-463a-aa4f-e36c144443c7)
![image](https://github.com/user-attachments/assets/d4f89175-5e6c-418c-b273-63c4c691d744)
![image](https://github.com/user-attachments/assets/0630cef7-80e1-4718-baf3-3d93422c5ad9)
![image](https://github.com/user-attachments/assets/a7c45dae-ff8a-4bbb-9586-a9e33be38904)




