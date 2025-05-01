# Airbnb Clone

A full-stack Airbnb clone built using Next.js 14, Tailwind CSS, Prisma, MongoDB, NextAuth, and more. This project includes features such as social login (Google), image uploads via Cloudinary CDN, interactive maps for location selection, and server-side listing fetching.

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About the Project

This Airbnb Clone is a full-stack application that replicates the core functionality of Airbnb. It showcases modern web development practices using Next.js 14, server components, and a robust technology stack.

## Tech Stack

### Client

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hook Form
- React Leaflet (for maps)
- Axios (for API requests)
- Zustand (for state management)
- and more...

### Server & Authentication

- Next.js Server Components
- NextAuth (for authentication)
- bcrypt (for password hashing)
- Middleware for authentication

### Database & Storage

- Prisma ORM
- MongoDB/Mongoose
- Cloudinary (for image uploads)
- MongoDB Atlas (for cloud database)

### Maps & Location

- Interactive Maps Integration
- IP Lookup API

## Features

### User Authentication

- Email/Password login
- login/register with Google
- Secure authentication using NextAuth

### Property Listings

- Browse and search properties
- Filter by location, date, guests, rooms, and more
- Interactive map view of properties
- Detailed property pages with images and information

### Reservations

- Make reservations on properties
- View trips and bookings
- Cancel reservations
- Hosts can manage reservations for their properties

### User Features

- Save favorite properties
- Create and manage personal listings
- Upload images via Cloudinary
- User profile management

### UI/UX

- Responsive design with Tailwind CSS
- Smooth animations using Framer Motion
- Interactive components and modals

## Environment Variables

To run this project, add the following environment variables to your `.env` file:

```
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Getting Started

### Prerequisites

- Node.js installed on your machine ([Download here](https://nodejs.org/))
- A MongoDB database (local or Atlas)
- Accounts for the following services:
  - Cloudinary (for image uploads)
  - Google Cloud Platform (for Google Auth)
  - Meta for Developers (for Facebook Auth)
  - IP Lookup API (for location detection)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AmrSayed0/airbnb-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd airbnb-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

The easiest way to deploy this application is through [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your environment variables.
4. Deploy the application.

## Project Structure

The project follows a clean architecture with the following structure:

```
├── app/                                      # Next.js app directory
│   ├── _actions/                             # Server-side actions
│   ├── _components/                          # UI components
│   ├── _hooks/                               # Custom React hooks
│   ├── _libs/                                # Utility functions
│   ├── _providers/                           # Context providers
│   ├── _types/                               # TypeScript type definitions
│   ├── api/                                  # API routes
│   ├── favorites/                            # Favorites page
│   ├── listings/                             # Listings page
│   ├── properties/                           # Property page
│   ├── reservations/                        # Reservations page
│   ├── trips/                                # Trips page
│   ├── error.tsx                             # Error boundary or custom error page
│   ├── favicon.ico                           # Favicon
│   ├── globals.css                          # Global styles
│   ├── layout.tsx                            # Root layout component
│   ├── loading.tsx                           # Loading state component
│   └── page.tsx                              # Default or home page
├── pages/                                    # Pages directory
│   └── api/                                  # API routes
│       └── auth/                             # Auth-related API routes
├── prisma/                                   # Prisma schema and migrations
├── public/                                   # Static assets (e.g., images)
├── .eslintrc.json                            # ESLint configuration
├── .gitignore                                # Git ignore configuration
├── README.md                                 # Project documentation
├── middleware.ts                             # Middleware logic
├── next.config.mjs                           # Next.js configuration
├── package-lock.json                         # Lock file for dependencies
├── package.json                              # Project dependencies and scripts
├── postcss.config.mjs                        # PostCSS configuration
├── tailwind.config.ts                        # Tailwind CSS configuration
├── tsconfig.json                             # TypeScript configuration


```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request.

## Live Demo

Experience the live demo of the project:  
[Live Demo](https://amrs-airbnb-clone.vercel.app/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [NextAuth Documentation](https://next-auth.js.org/getting-started/introduction)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [React Leaflet Documentation](https://react-leaflet.js.org/)

## Author

- [Amr Sayed](https://amrs-portfolio.vercel.app/)

⭐ Don't forget to leave a star on the repository if you find this project helpful!
