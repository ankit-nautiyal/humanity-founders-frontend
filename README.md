# ReferralHub

A modern web application for business referral management built with React and Tailwind CSS.

## Overview

ReferralHub is a platform designed to streamline the process of managing business referrals. It provides a smooth user experience with animated transitions, a clean UI, and comprehensive features for business profile management.

## Features

- **User Authentication**
  - Email/Password login
  - Social login options
  - Magic link authentication
  - Registration with validation

- **Platform Setup**
  - Business profile creation
  - Logo upload
  - Business information management

- **Modern UI/UX**
  - Smooth page transitions
  - Staggered fade-in animations
  - Responsive design for all screen sizes
  - Toast notifications for user feedback

## Technology Stack

- **Frontend Framework**: React
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Notifications**: React Toastify

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ankit-nautiyal/humanity-founders-frontend.git
   cd humanity-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/          # Static assets like SVGs
├── components/      # Reusable components
├── pages/           # Page components
├── utils/           # Utility functions and API handlers
├── App.jsx          # Main application component
└── index.js         # Application entry point
```

## Main Components

### Authentication Flow

- **LoginPage**: Handles user login with multiple authentication methods
- **RegistrationPage**: User registration with form validation
- **MagicLinkSection**: Email-based passwordless authentication

### Business Profile

- **BusinessProfileForm**: Comprehensive form for business information
- **FormField**: Reusable form field component with validation
- **SelectField**: Dropdown selection component

### Animation Components

- **PageTransition**: Smooth transitions between pages
- **FadeIn**: Staggered fade-in effects for form elements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Icons provided by [Builder.io](https://builder.io/)
- UI/UX inspiration from modern web applications
