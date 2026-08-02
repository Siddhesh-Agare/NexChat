# 💬 NexChat

NexChat is a full-stack real-time chat application built with the MERN stack. It allows users to securely authenticate, send instant messages, share images and videos, and see online users in real time using Socket.IO.

## ✨ Features

- Secure authentication with Clerk
- Real-time messaging with Socket.IO
- One-to-one conversations
- Online/offline user status
- Image & video sharing
- User and conversation search
- Responsive UI built with HeroUI & Tailwind CSS
- Zustand for state management

## 🛠 Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- HeroUI
- Zustand
- Axios
- Socket.IO Client
- Clerk

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Multer
- ImageKit

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/NexChat.git
cd NexChat
```

### Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Environment Variables

**Backend (.env)**

```env
PORT=3001
MONGODB_URI=
CLERK_SECRET_KEY=
FRONTEND_URL=http://localhost:5173
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

**Frontend (.env)**

```env
VITE_API_URL=http://localhost:3001/api
VITE_CLERK_PUBLISHABLE_KEY=
```

### Run the application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

## 🐳 Docker

```bash
docker build -t nexchat .
docker run -p 3001:3001 nexchat
```

## 📸 Screenshots


<img width="1356" height="628" alt="image" src="https://github.com/user-attachments/assets/ca8872e8-b8cd-44a5-9a21-5833d0a2309e" />


## 👨‍💻 Author

**Siddhesh Agare**

GitHub: https://github.com/Siddhesh-Agare
