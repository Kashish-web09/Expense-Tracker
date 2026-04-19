# 💰 Personal Expense Tracker (MVC)

A **Personal Expense Tracker** built using the **MVC (Model-View-Controller)** architecture with **user authentication**. This application allows users to securely manage their own expenses. Data is currently stored in **JSON files**, with future plans to integrate **MongoDB**.

---

## 🚀 Features

* 🔐 User Registration & Login (Session-based authentication)
* 🍪 Cookie & Session management
* ➕ Add new expenses
* 📄 View user-specific expenses
* ✏️ Edit expenses
* ❌ Delete expenses
* 🔒 Protected routes (only logged-in users can access data)
* 📊 Clean MVC architecture
* 💾 JSON-based data storage

---

## 🏗️ Project Structure (MVC)

```
Personal_Expense_Tracker/
│
├── models/        # Data logic (read/write JSON)
├── views/         # UI templates (EJS)
├── controllers/   # Business logic
├── routes/        # Routes
├── data/          # JSON files (expenses + users)
├── app.js         # Entry point
└── package.json
```

---

---

---

## 📌 MVC Flow

1. User Request → Route
2. Route → Controller
3. Controller → Model (JSON data)
4. Model → Controller
5. Controller → View
6. View → Response

---

## 🔄 Future Improvements

* 🔗 MongoDB integration
* 🔐 Password hashing with bcrypt
* 📱 Responsive UI
* 📈 Expense analytics
* 🏷️ Categories & filters

---

## 👤 Author

**Kashish Narang**

---

This project demonstrates practical implementation of **MVC architecture, session-based authentication, and user-specific data handling** in a Node.js application.
