import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ClassRegistration from './Components/ClassRegistration';  // Import ClassRegistration component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register-classes" element={<ClassRegistration />} /> {/* Add route for Class Registration */}
      </Routes>
    </Router>
  );
};

export default App;
