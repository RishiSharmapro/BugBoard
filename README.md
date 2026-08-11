# BugBoard

A modern, open-source **Issue Tracker** built with **React + FastAPI + TypeScript + TailwindCSS**.  
Track, search, filter, sort, create, and update issues efficiently with a clean and responsive dashboard interface.

---

## 🚀 Table of Contents
1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Screenshots](#screenshots)  
7. [Project Structure](#project-structure)  
8. [Author](#author)  
9. [License](#license)  

---

## 📝 Project Overview
**BugBoard** is a lightweight issue tracking application designed for developers and teams to manage tasks effectively.  
It includes a backend built with **FastAPI** for REST APIs and a frontend built with **React + TypeScript** for a responsive UI.  

The app supports:  
- Viewing a list of issues with pagination  
- Searching issues by title  
- Filtering issues by status, priority, and assignee  
- Sorting issues by created or updated time  
- Creating and editing issues  
- Viewing detailed JSON data for each issue  

---

## ✨ Features
- **Issues List Page:** Table view with sorting, search, and filters  
- **Create & Edit Issues:** Add or update issues with automatic timestamps  
- **Issue Detail Page:** View full JSON data of each issue  
- **Pagination:** Navigate through multiple pages of issues  
- **Modern UI:** Responsive design with TailwindCSS and subtle animations  

---

## 🛠 Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript, TailwindCSS, Motion |
| Backend | FastAPI, Python, Pydantic, UUID |
| Routing | React Router v7 |
| Development Tools | Vite, SWC, Node.js, npm |

---

## 💻 Installation

### Backend
1. Clone the repository
```bash
git clone https://github.com/RishiSharmapro/BugBoard.git
cd BugBoard/backend
````

2. Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. Install dependencies

```bash
pip install fastapi uvicorn pydantic
```

4. Run the backend

```bash
uvicorn main:app --reload
```

### Frontend

1. Navigate to the frontend folder

```bash
cd ../frontend
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open the app in your browser at `http://localhost:5173`

---

## ⚡ Usage

* Go to the **Issues List Page** to see all issues
* Use the **search box** to find issues by title
* Apply **filters** by status, priority, or assignee
* Click **column headers** to sort by that field
* Use **pagination buttons** to navigate through pages
* Click **Create Issue** to add a new issue
* Click **Edit** to update an issue
* Click on a row to view the full **Issue Detail JSON**

---

## 📸 Screenshots
<img width="1469" height="836" alt="Landing Page" src="https://github.com/user-attachments/assets/20e08e76-8161-43fa-a243-01ff74b3f39c" />
<img width="1470" height="838" alt="Issue List" src="https://github.com/user-attachments/assets/b42f161a-4051-492c-b114-3b3b20c00636" />
<img width="1470" height="837" alt="Issue Detail View" src="https://github.com/user-attachments/assets/f9cdcb9c-a917-440d-92cb-05d4a79c7b77" />
<img width="1470" height="838" alt="Issue Edit Options" src="https://github.com/user-attachments/assets/4b572eff-8b15-4851-b974-1184267eb651" />

---

## 📂 Project Structure

```
issuehub/
 ┣ backend/
 ┃ ┣ main.py          # FastAPI backend
 ┃ ┗ requirements.txt
 ┣ frontend/
 ┃ ┣ src/
 ┃ ┃ ┣ components/    # Reusable UI components
 ┃ ┃ ┣ types/         # TypeScript types
 ┃ ┃ ┗ App.tsx
 ┃ ┗ package.json
 ┣ README.md
 ┗ LICENSE
```

---
## 👤 Author

**Rishi Sharma**

* [GitHub](https://github.com/rishisharmapro)
* [Portfolio](https://rishisharmapro.vercel.app)
* [LinkedIn](https://www.linkedin.com/in/rishisharmapro)

---

## 📄 License

This project is licensed under the **MIT License**.
See `LICENSE` for more information.
  

