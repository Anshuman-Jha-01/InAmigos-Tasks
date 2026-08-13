# MindHarbor

This project is **MindHarbor**, a modern mental health care website built with **React.js, Vite, Express.js, and MongoDB**. The application provides a calm and accessible digital experience for exploring mental health services, reading resources and blog content, joining community events, contacting the practice, and booking appointments.

Designed around trust, accessibility, and mindfulness, **MindHarbor** combines a responsive React frontend with a RESTful Express/MongoDB backend. A signature breathing-circle animation reinforces the website's calming visual identity and creates a grounding experience for visitors.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)

---

## Project Overview

**MindHarbor** is a full-stack mental health care website designed to make mental health services and resources easier to access. The frontend is built with **React.js and Vite**, while the backend uses **Express.js and Mongoose** to provide API endpoints for appointments, contact messages, testimonials, blog posts, and community events.

The website follows a calming design system based on **sage green, warm amber, deep ink teal, and soft sand**. Typography combines **Fraunces** for prominent headings, **Inter** for body text, and **IBM Plex Mono** for labels and timestamps.

A distinctive **breathing circle** with a slow inhale/exhale animation is used as a visual representation of grounding and mindfulness.

---

## Features

- **Home Page**:
  - Introduces MindHarbor and its mental health services.
  - Includes the signature breathing-circle hero interaction.
  - Provides clear calls to action for appointments and resources.

- **About Page**:
  - Presents information about the practice and its approach to mental health care.

- **Mental Health Services**:
  - Helps visitors explore available services and care options.

- **Appointment Booking**:
  - View available appointment slots for a selected date.
  - Book an appointment through the backend API.
  - Includes appointment confirmation and cancellation support through the API.

- **Resources**:
  - Provides mental health resources and educational content.

- **Blog**:
  - Browse blog articles.
  - Open individual articles using dynamic routes and slugs.

- **Community**:
  - Discover upcoming community events and workshops.
  - Register for events directly through the application.

- **Testimonials**:
  - Display approved testimonials.
  - Allow users to submit testimonials for review.

- **Contact Form**:
  - Submit messages and inquiries to the practice.

- **Privacy Policy**:
  - Provides information about privacy and data practices.

- **Responsive Design**:
  - Designed to provide a comfortable experience across desktop and mobile screen sizes.
  - Uses a consistent calming visual system throughout the application.

- **Graceful API Fallbacks**:
  - Frontend pages can fall back to static demonstration content when the backend API is unavailable, allowing the interface to be previewed without immediately configuring MongoDB.

- **API Rate Limiting and CORS**:
  - Backend includes Express rate limiting and CORS configuration for safer API usage.

---

## Technologies Used

- **Frontend:**
  - **React.js** for building reusable user interfaces.
  - **Vite** for fast development and production builds.
  - **React Router DOM** for client-side routing.
  - **CSS** for the custom design system, responsive layouts, animations, and shared styling.

- **Backend:**
  - **Node.js** for the server runtime.
  - **Express.js** for building REST API routes.
  - **Mongoose** for MongoDB data modeling and database access.
  - **CORS** for handling cross-origin requests.
  - **Express Rate Limit** for API request limiting.
  - **dotenv** for environment variable management.

- **Database:**
  - **MongoDB** for storing appointments, contact messages, testimonials, blog posts, and events.

---

## Installation

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- **MongoDB** running locally or a MongoDB Atlas connection

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/InAmigos-Tasks.git
   cd Task 3 - AI Website Generation
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Configure the server environment variables:**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your MongoDB connection string and other server configuration values.

4. **Start the backend development server:**
   ```bash
   npm run dev
   ```

   The API will run on:

   ```text
   http://localhost:5000
   ```

5. **Open a new terminal and install client dependencies:**
   ```bash
   cd client
   npm install
   ```

6. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

7. **Open the application in your browser:**
   ```text
   http://localhost:5173/
   ```

The Vite development server proxies `/api/*` requests to the Express server.

---

## Environment Variables

Create a `.env` file inside the `server` directory using `.env.example` as a template.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## Usage

1. **Explore the Home Page:**
   - Learn about MindHarbor and access the main calls to action.
   - Interact with the breathing-circle visual for a calming experience.

2. **Browse Services:**
   - Explore the mental health services offered by the practice.

3. **Book an Appointment:**
   - Select a date.
   - View available time slots.
   - Submit the appointment form.
   - Receive confirmation after successful booking.

4. **Read Resources and Blog Articles:**
   - Browse educational mental health resources.
   - Open individual blog posts from their dynamic routes.

5. **Join the Community:**
   - Browse upcoming workshops and events.
   - Register for an available event.

6. **Contact MindHarbor:**
   - Complete the contact form and submit an inquiry.

7. **Explore Testimonials:**
   - View approved testimonials.
   - Submit a testimonial for review.

---

## Components

### Main Application Components

1. `App.jsx`
   - Root application component.
   - Configures the main routes.
   - Renders the shared `Navbar` and `Footer`.

2. `Navbar.jsx`
   - Provides the main navigation bar and links to the website pages.

3. `Footer.jsx`
   - Provides the shared footer and supporting navigation links.

4. `BreathingHero.jsx`
   - Implements the signature breathing-circle animation used to create a calm and mindful visual experience.

### Pages

1. `Home.jsx`
   - Main landing page and introduction to MindHarbor.

2. `About.jsx`
   - Provides information about the practice.

3. `Services.jsx`
   - Displays available mental health services.

4. `Resources.jsx`
   - Provides mental health resources and educational content.

5. `Blog.jsx`
   - Displays individual blog articles using dynamic URL slugs.

6. `Appointments.jsx`
   - Handles appointment availability and booking.

7. `Community.jsx`
   - Displays community events and registration options.

8. `Contact.jsx`
   - Provides the contact form for user inquiries.

9. `Privacy.jsx`
   - Displays the privacy policy.

### API Helper

`api.js`
- Centralizes frontend requests to the Express API.
- Handles appointment availability and booking.
- Sends contact messages.
- Retrieves testimonials.
- Retrieves blog posts and individual articles.
- Retrieves upcoming events.
- Handles event registration.

---

## API Endpoints

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/api/appointments/availability?date=YYYY-MM-DD` | Get available appointment slots for a date |
| `POST` | `/api/appointments` | Book an appointment |
| `PATCH` | `/api/appointments/:id/cancel` | Cancel an appointment |
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/testimonials?featured=true` | Retrieve approved/featured testimonials |
| `POST` | `/api/testimonials` | Submit a testimonial for review |
| `GET` | `/api/blog` | Retrieve blog posts |
| `GET` | `/api/blog/:slug` | Retrieve a specific blog article |
| `GET` | `/api/events?upcoming=true` | Retrieve upcoming events |
| `POST` | `/api/events/:id/register` | Register for an event |

---

## Project Structure

```bash
MindHarbor/
├── client/
│   ├── public/
│   │   ├── about.txt
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── components/
│   │   │   ├── BreathingHero.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── Resources.jsx
│   │   │   └── Services.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   ├── Appointment.js
│   │   ├── BlogPost.js
│   │   ├── ContactMessage.js
│   │   ├── Event.js
│   │   └── Testimonial.js
│   ├── routes/
│   │   ├── appointments.js
│   │   ├── blog.js
│   │   ├── contact.js
│   │   ├── events.js
│   │   └── testimonials.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## Future Improvements

- Add authentication and authorization for an admin dashboard.
- Add admin functionality for managing appointments, events, testimonials, and blog posts.
- Add email/SMS notifications for appointment confirmations and reminders.
- Replace the contact page map placeholder with a real map integration.
- Add automated frontend and backend tests.
- Add a CI/CD pipeline for automated builds and deployments.
- Improve accessibility auditing and keyboard navigation.
- Add stronger production security, encryption, audit logging, and privacy safeguards before handling real sensitive client data.
