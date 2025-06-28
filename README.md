# Kenya RollBall Federation Web App

A modern web application for the Kenya RollBall Federation, built with **Django** (backend API) and **React (Vite)** (frontend). This project provides live fixtures, team statistics, championship standings, and a contact portal for rollball enthusiasts and participants.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend (Django)](#backend-django)
  - [Frontend (React Vite)](#frontend-react-vite)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🏆 **Live Fixtures & Standings**: View upcoming matches, live games, and current league tables.
- 👥 **Team & Player Stats**: Explore registered teams and active players.
- 📰 **News & Updates**: Stay updated with the latest news.
- 📬 **Contact Form**: Reach out for inquiries, registration, or support.
- 🎨 **Modern UI**: Responsive, accessible, and visually appealing design using Tailwind CSS.
- 🔒 **API-Driven**: Django REST API for robust data management.

---

## Tech Stack

- **Frontend**: [React](https://react.dev/) (Vite), [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Backend**: [Django](https://www.djangoproject.com/), [Django REST Framework](https://www.django-rest-framework.org/)
- **Routing**: React Router
- **State/Data**: React hooks, API calls to Django backend

---

## Project Structure

```
KRBF/
  backend/           # Django backend (API)
    accounts/        # Django app: user accounts
    clubs/           # Django app: clubs/teams
    core/            # Django app: core logic
    rollball_federation/ # Django project root
    ...
  frontend/          # React frontend (Vite)
    public/
    src/
      assets/
      components/
      pages/
    ...
  README.md
  ...
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Python](https://www.python.org/) (v3.9+ recommended)
- [pip](https://pip.pypa.io/en/stable/)
- [virtualenv](https://virtualenv.pypa.io/en/latest/) (optional but recommended)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/krbf.git
cd krbf
```

---

### 2. Backend (Django)

#### a. Setup Virtual Environment

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
```

#### b. Install Dependencies

```bash
pip install -r requirements.txt
```

#### c. Run Migrations

```bash
python manage.py migrate
```

#### d. Create Superuser (Optional, for admin access)

```bash
python manage.py createsuperuser
```

#### e. Start the Backend Server

```bash
python manage.py runserver
```

The backend API will be available at `http://127.0.0.1:8000/`.

---

### 3. Frontend (React Vite)

#### a. Install Dependencies

```bash
cd ../frontend
npm install
```

#### b. Start the Frontend Dev Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/` (default Vite port).

---

## Development

- The backend and frontend run independently. For API calls, configure the frontend to use the backend's API URL (see `.env` or config files if needed).
- Use Django admin for backend management at `/admin/`.
- Use React components and Tailwind for frontend UI.

---

## Deployment

- For production, build the frontend with `npm run build` and serve with a static server or integrate with Django using [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) or similar.
- Use environment variables for production settings.
- Deploy backend using services like Heroku, DigitalOcean, or your own server.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
