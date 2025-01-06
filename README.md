# Classes Registration App

## Overview

The Classes Registration App is a user-friendly interface developed using React.js and Tailwind CSS. It allows users to browse a list of courses, select or deselect courses, and register for their selected courses. Additionally, it includes a user icon for accessing a logout option, which redirects the user to the welcome page.

## Features

- **Course Browsing**: Users can view a list of available courses, each with a name, fee, credit hours, and an image.
- **Course Selection**: Users can select courses to add them to their selected list.
- **Course Deselection**: Users can remove courses from their selected list.
- **Registration**: Users can register for the selected courses and receive a success message.
- **User Authentication**: A user icon is provided for logging out, which redirects to the welcome page.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Icons**: For including user icons and other icons in the interface.

## Project Structure

```
├── public/
│   ├── assets/
│   │   ├── intro_to_c_programming.jpg
│   │   ├── intro_to_java.jpg
│   │   └── ... (other course images)
├── src/
│   ├── Components/
│   │   ├── ClassRegistration.jsx
│   │   ├── Login.jsx 
│   │   ├── SignUp.jsx
│   │   └── WelcomePage.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd class-registration-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Navigate through the welcome page, login, and sign-up forms.
3. Access the class registration page to browse, select, and register for courses.
4. Click the user icon to access the logout option and return to the welcome page.

![Welcome](https://github.com/user-attachments/assets/f428bcc5-bd63-4611-bdf4-16945919536a)

![Sign_Up](https://github.com/user-attachments/assets/29923763-8a40-4c97-a847-ce98c2a5a6f2)

![Login](https://github.com/user-attachments/assets/8d08542e-b7be-4fe2-83f2-40d8849faf50)

![Classes_Registration](https://github.com/user-attachments/assets/d329824c-b77b-4666-b47f-9ed82a02638c)
