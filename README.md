#P.S THE FILES ARE IN MASTER BRANCH <3

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


screenshots

Normal User

![image](https://github.com/user-attachments/assets/99c410a7-fefa-4a37-9827-1f6fc4daeb99)

Admin User

![image](https://github.com/user-attachments/assets/d59c06fa-0936-4587-bc7e-8238e0730576)

![image](https://github.com/user-attachments/assets/df9060c1-6570-4748-8c5c-e8ce0c4bbaec)

Admin User can Only upload image
![image](https://github.com/user-attachments/assets/83cdbcc4-cb68-4c39-8703-e45001895978)


Normal User cannot upload any images
![image](https://github.com/user-attachments/assets/1312a462-5868-45c0-9b34-39309ea1f843)

Fetch all the images

![image](https://github.com/user-attachments/assets/5c037e14-a87c-4df7-b290-534f3b9a9104)


📸 Image Upload & Fetch API
📤 Upload Image

POST /api/images/upload
Uploads an image file to Cloudinary and saves its metadata in MongoDB.

Response:

{
  "success": true,
  "message": "Image uploaded successfully",
  "image": {
    "_id": "...",
    "url": "cloudinary_image_url",
    "publicId": "cloudinary_public_id",
    "uploadedBy": "user_id",
    "createdAt": "timestamp"
  }
}

📥 Fetch Images

GET /api/images
Fetches all uploaded images with pagination and sorting support.

Query Parameters:

    page (default: 1)

    limit (default: 5)

    sortBy (default: createdAt)

    sortOrder (asc/desc, default: desc)

Response:

{
  "success": true,
  "currentPage": 1,
  "totalPages": 1,
  "totalImages": 3,
  "data": [
    {
      "_id": "...",
      "url": "cloudinary_image_url",
      "uploadedBy": "user_id",
      "createdAt": "timestamp"
    }
  ]
}

Delete Images
![image](https://github.com/user-attachments/assets/a6078457-7b3f-4f9b-bc43-43ddf5064007)

Only admins can delete images
![image](https://github.com/user-attachments/assets/9260529e-ad9b-4408-8781-427764a19bcb)

MongoDB
![image](https://github.com/user-attachments/assets/46077c2c-6e09-46c5-8a9b-7634140ea6d4)

Images uploaded on cloudinary
![image](https://github.com/user-attachments/assets/f738bd1d-4ec5-4b81-a9d9-890c466e38ad)


P.S the presence of     fs.unlinkSync(req.file.path);
 deletes teh file on our directory /upload once the file is uplaoded to cloudinary <3


