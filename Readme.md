# 🛠️ How to Run Locally

## 1. **Backend Setup**
```
cd backend
npm install
```
Create `.env`:
```
MONGO_URI=mongodb://127.0.0.1:27017/leads
```
Run:
```
npm run start
```
(Or use `node server.js` if not using nodemon)

Backend runs on **http://localhost:4000**

---

## 2. **Frontend Setup**
```
cd frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:3000**
