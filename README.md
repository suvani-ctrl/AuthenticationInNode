

# 🚀 Authentication & Image Upload API — Node.js, Express, MongoDB, Cloudinary

Welcome to the [**AuthenticationInNode**](https://github.com/suvani-ctrl/AuthenticationInNode) project — a beginner-friendly, full-featured REST API built with **Node.js**, **Express**, **MongoDB (Mongoose)**, **JWT**, **bcryptjs**, and **Cloudinary**.  
It handles secure **user authentication** and **image upload, fetch, and delete operations** — cleanly structured for learning and scalability.

---

## 📁 Project Structure

```
AuthenticationInNode/
├── controllers/        
│   ├── auth-controller.js         # Authentication logic (register, login)
│   └── image-controller.js        # Image upload, fetch, delete logic
├── database/                      # MongoDB connection config
├── helpers/
│   └── cloudinaryHelper.js        # Cloudinary image upload helper
├── middleware/                    # (Custom middleware — like JWT auth checks)
├── models/                        
│   ├── User.js                    # Mongoose User schema
│   └── Image.js                   # Mongoose Image schema
├── routes/                        
│   ├── auth-routes.js             # Auth route definitions
│   └── image-routes.js            # Image route definitions
├── uploads/                       # Temporary local file storage
├── .env                           # Environment variables
├── package.json                   # Project metadata and dependencies
├── server.js                      # Main server entry point
└── README.md                      # Documentation
```

---

## ✨ Features

### 🔐 Authentication
- ✅ User registration
- ✅ User login with hashed passwords
- ✅ JWT token generation and validation
- ✅ User roles (admin/user)
- ✅ MongoDB integration using Mongoose

### 📸 Image Upload API
- ✅ Upload images to **Cloudinary**
- ✅ Store image metadata in **MongoDB**
- ✅ Fetch images with **pagination** and **sorting**
- ✅ Delete images (only by the uploading user)
- ✅ Delete local files after successful upload

---

## 🔐 Authentication API Endpoints

| Method | Endpoint      | Description                     |
|:--------|:----------------|:--------------------------------|
| `POST`  | `/api/auth/register` | Register a new user              |
| `POST`  | `/api/auth/login`    | Log in a user and receive a JWT  |

### Public/Home/Admin Routes

| Method | Endpoint      | Description                        |
|:--------|:----------------|:------------------------------------|
| `GET`  | `/welcome`         | Public welcome message               |
| `GET`  | `/admin-page`      | Example admin-only page (protected in future) |

---

## 📸 Image Upload API Endpoints

| Method | Endpoint               | Description                                        |
|:--------|:--------------------------|:---------------------------------------------------|
| `POST`  | `/api/images/upload`        | Upload an image (requires authenticated user)       |
| `GET`   | `/api/images`               | Fetch all images (supports pagination & sorting)    |
| `DELETE`| `/api/images/:id`           | Delete an image (only by the uploading user)        |

**Image Query Parameters**
- `page` — (optional) default: 1
- `limit` — (optional) default: 5
- `sortBy` — (optional) default: `createdAt`
- `sortOrder` — (optional) `asc` or `desc` (default: `desc`)

---

## 🛠️ Technologies Used

- **Node.js** 🌿
- **Express** ⚡
- **MongoDB & Mongoose** 🍃
- **bcryptjs** 🔒
- **jsonwebtoken (JWT)** 🛡️
- **Cloudinary** ☁️
- **Multer** (file upload middleware)

---

## ⚙️ Getting Started

### 📥 1️⃣ Clone the Repository
```bash
git clone https://github.com/suvani-ctrl/AuthenticationInNode.git
cd AuthenticationInNode
```

### 📦 2️⃣ Install Dependencies
```bash
npm install
```

### 📝 3️⃣ Create a `.env` File
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 🚀 4️⃣ Run the Server
```bash
nodemon server.js
```

---

## 📌 Notes

- Passwords are securely hashed using **bcryptjs**
- JWT tokens are generated on login and protect authenticated routes
- `iat` in JWT payload = *Issued At* (token creation timestamp)
- Uploaded images are temporarily stored locally then moved to **Cloudinary**
- The `/middleware` directory is ready for adding custom authentication or role-based middleware

---

## 📚 Learnings

- REST API fundamentals 📖
- MongoDB document modeling 📄
- JWT token management 🔑
- Cloudinary integration for file hosting ☁️
- Password encryption with bcrypt 🔒
- API pagination and sorting 📊
- Environment variable management 🔐
- Modular, clean backend architecture 🏗️

---

## 🎨 Test the API

Use **Postman**, **cURL**, or any API client to test all endpoints.

---

## ✨ Author

**[Suvani](https://github.com/suvani-ctrl)**  

---

## ⭐ GitHub Repo

👉 [https://github.com/suvani-ctrl/AuthenticationInNode](https://github.com/suvani-ctrl/AuthenticationInNode)

---

```


## 📸 Screenshots
![image](https://github.com/user-attachments/assets/78905d09-053c-463a-aa4f-e36c144443c7)
![image](https://github.com/user-attachments/assets/d4f89175-5e6c-418c-b273-63c4c691d744)
![image](https://github.com/user-attachments/assets/0630cef7-80e1-4718-baf3-3d93422c5ad9)
![image](https://github.com/user-attachments/assets/a7c45dae-ff8a-4bbb-9586-a9e33be38904)
![image](https://github.com/user-attachments/assets/fbd0469b-804f-4992-9686-cfb1342be9a3)
![image](https://github.com/user-attachments/assets/898571a8-3db4-4688-9ef6-9be2c26b1e1c)

## with normal users bearer token
![image](https://github.com/user-attachments/assets/f892e03a-0c35-409b-9681-fa7071ec0a53)

## with admin bearer token
![image](https://github.com/user-attachments/assets/2b876778-dfbc-4144-bad0-f763558190da)







