# [EduSphere](<(https://client-three.vercel.app)>)

## 📌 Introduction

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A modern full-stack web application built with **React**, **Next.js**, and **Node.js**, featuring user authentication, personalized item management, and a responsive UI.

## Features

- User registration and login with **JWT authentication**.
- Add, edit, and delete personal items.
- Only show items created by the logged-in user.
- Responsive UI using **Tailwind CSS**.
- Secure API endpoints with authorization checks.

## 🚀 View Live Demo

<img src="https://img.shields.io/badge/website-up-greene" />

<pre><center><a href="[]()"><b></b></a></center></pre>

## 👨‍💻 Tech Stack Used

### Frontend

- ReactJS, TailwindCSS, JavaScript, Axios, React-icons

### Backend

- Next.js, JWT, MongoDB

## Folder Structure

```bash
mern-stack-project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── itemController.js
│   ├── models/
│   │   ├── User.js
│   │   └── item.js
│   ├── app/
│   │   └── api.js
│   │       ├── authRoutes.js
│   │       ├── itemRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── middleware
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── itemList.js
│   │   │   ├── Footer.js
│   │   │   ├── Navbar.js
│   │   │   └── showList.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Main.js
│   │   │   └── SignIn.js
│   │   │   └── SignUp.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   │
│   └── package.json
├── README.md
└── .gitignore

```

## 🛠️ Installation Steps

Star and Fork the Repo 🌟 and this will keep us motivated.

1. Clone the repository

```bash
git clone https://github.com/subhashdippu/eduSphere.git
```

2. Change the working directory

```bash
cd eduSphere
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run start
```
