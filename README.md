# Personal Tracker App

A Full Stack Web Application built using Node.js, Express.js, EJS, and MongoDB that allows users to manage and track personal records efficiently. The application follows the MVC architecture pattern and includes authentication, validation, API documentation, and secure configuration management.

## Features

* User Authentication using JWT (JSON Web Tokens)
* Create, Read, Update, and Delete (CRUD) Operations
* MVC (Model-View-Controller) Architecture
* Server-Side Rendering with EJS
* MongoDB Database Integration
* Input Validation using Express Validator
* Secure Environment Variable Management using dotenv
* API Documentation using Swagger
* Error Handling Middleware
* Protected Routes and Authorization
* Clean and Scalable Project Structure

## Tech Stack

### Frontend

* EJS
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* MongoDB Compass

### Additional Tools & Libraries

* JWT Authentication
* Express Validator
* Swagger UI
* dotenv
* MVC Architecture
* Git & GitHub

## Project Structure

```text
Personal_Tracker_App/
│
├── controllers/
├── models/
├── routes/
├── views/
├── middlewares/
├── public/
├── swagger/
├── config/
├── .env
├── server.js
└── package.json
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/Kashish-web09/Expense-Tracker.git
```

### Navigate to the Project Folder

```bash
cd Expense-Tracker
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Application

```bash
npm start
```

## API Documentation

Swagger documentation is integrated into the project for testing and understanding API endpoints.

After starting the server, visit:

```text
http://localhost:3000/api-docs
```

## Authentication

The application uses JWT (JSON Web Tokens) for secure authentication and route protection.

## Database

MongoDB Atlas is used as the cloud database service, while MongoDB Compass is used for local database management and visualization.

## Key Learning Outcomes

* Building RESTful APIs using Express.js
* Implementing JWT-based Authentication
* Applying MVC Architecture in real-world applications
* Working with MongoDB and Cloud Databases
* Server-side Rendering with EJS
* API Documentation using Swagger
* Input Validation and Error Handling
* Managing Environment Variables securely
* 
#### Learning Highlights

During the development of this project, I applied concepts learned through **Coding Ninjas** and hands-on practice, including:

- MVC Architecture
- REST API Development
- MongoDB Database Design
- JWT Authentication & Authorization
- Express Middleware
- Input Validation
- Environment Variable Management
- API Documentation using Swagger
- Git & GitHub Version Control
- Full Stack Application Development

## Future Improvements

* Password Reset Functionality
* User Profile Management
* Email Verification
* Pagination and Search
* Deployment on Railway/Render

## Author

**Kashish Narang**

GitHub: https://github.com/Kashish-web09
