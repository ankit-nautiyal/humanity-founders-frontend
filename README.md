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

## Project Screenshots
![image](https://github.com/user-attachments/assets/a3dbd1c5-1bf2-4fdb-826d-0791961945cb)
![image](https://github.com/user-attachments/assets/240f5250-9135-44a1-8324-fc95b5f94c0e)
![image](https://github.com/user-attachments/assets/cbe02561-6818-445b-887e-0b5ca08b17c7)
![image](https://github.com/user-attachments/assets/eb22a5b6-cbce-4489-8326-daf11e61d488)
![image](https://github.com/user-attachments/assets/dd58f16b-57bd-40a0-a8fa-8dcb51e06f66)
![image](https://github.com/user-attachments/assets/8350bee1-122d-4fba-95d8-acdd9254dc7e)
![image](https://github.com/user-attachments/assets/3115c119-c2a7-4510-ae30-33c84f9cfdb2)
![image](https://github.com/user-attachments/assets/e11db421-d0ce-4e31-8db2-1ad6a17814e8)
![image](https://github.com/user-attachments/assets/b7db791a-8abb-4dd6-afae-94b50c05e1f5)


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
