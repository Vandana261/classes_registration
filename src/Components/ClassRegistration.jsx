import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClassRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showLogout, setShowLogout] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: 'Intro to C Programming', fee: 199.99, credit: 4, img: '/assets/intro_to_c_programming.jpg' },
    { id: 2, name: 'Introduction to Java', fee: 219.99, credit: 3, img: '/assets/intro_to_java.jpg' },
    { id: 3, name: 'Web Development Basics', fee: 159.99, credit: 4, img: '/assets/web_development_basics.jpg' },
    { id: 4, name: 'Advanced Machine Learning', fee: 319.99, credit: 5, img: '/assets/advanced_machine_learning.jpg' },
    { id: 5, name: 'Cloud Computing Essentials', fee: 249.99, credit: 4, img: '/assets/cloud_computing_essentials.jpg' },
    { id: 6, name: 'Artificial Intelligence Foundations', fee: 299.99, credit: 5, img: '/assets/artificial_intelligence_foundations.jpg' },
    { id: 7, name: 'Introduction to Cybersecurity', fee: 179.99, credit: 3, img: '/assets/introduction_to_cybersecurity.jpg' },
    { id: 8, name: 'Introduction to Python', fee: 149.99, credit: 3, img: '/assets/intro_to_python.jpg' },
    { id: 9, name: 'Problem Solving', fee: 149.99, credit: 3, img: '/assets/problem_solving.jpg' },
    { id: 10, name: 'Introduction to JavaScript', fee: 199.99, credit: 4, img: '/assets/introduction_to_javascript.jpg' },
    { id: 11, name: 'Advanced Python Programming', fee: 299.99, credit: 4, img: '/assets/advanced_python_programming.jpg' },
    { id: 12, name: 'Full Stack Web Development', fee: 249.99, credit: 5, img: '/assets/full_stack_web_development.jpg' },
    { id: 13, name: 'Machine Learning Basics', fee: 279.99, credit: 4, img: '/assets/machine_learning_basics.jpg' },
    { id: 14, name: 'Introduction to Data Science', fee: 259.99, credit: 4, img: '/assets/introduction_to_data_science.jpg' },
    { id: 15, name: 'Cloud Infrastructure & DevOps', fee: 269.99, credit: 4, img: '/assets/cloud_infrastructure_devops.jpg' },
  ];

  const handleSelectCourse = (course) => {
    if (!selectedCourses.some(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleDeselectCourse = (id) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== id));
  };

  const handleRegister = () => {
    setRegistrationMessage('Registered successfully');
    setTimeout(() => setRegistrationMessage(''), 3000);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const totalCreditHours = selectedCourses.reduce((total, course) => total + course.credit, 0);
  const totalFee = selectedCourses.reduce((total, course) => total + course.fee, 0);

  return (
    <div className="flex">
      <div className="w-3/4 p-8">
        <h2 className="text-3xl font-bold mb-6">Classes Registration</h2>
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 flex flex-col h-96">
              <img 
                src={course.img} 
                alt={course.name} 
                className="w-full h-56 object-contain mb-4 rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-gray-600">Fee: ${course.fee.toFixed(2)}</p>
                <p className="text-gray-600">Credit: {course.credit}hr</p>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="mt-auto w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/4 p-8 bg-gray-100 fixed top-20 right-0 h-screen overflow-auto">
        <h2 className="text-2xl font-bold mb-6">Selected Courses</h2>
        <div className="space-y-4">
          {selectedCourses.length === 0 ? (
            <div className="text-gray-500">No courses selected</div>
          ) : (
            selectedCourses.map((course, index) => (
              <div key={course.id} className="flex items-center justify-between">
                <span>{index + 1}. {course.name}</span>
                <button
                  onClick={() => handleDeselectCourse(course.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        {selectedCourses.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Total Credit Hours: {totalCreditHours}</h3>
            <h3 className="text-lg font-semibold">Total Fee: ${totalFee.toFixed(2)}</h3>
            <button
              onClick={handleRegister}
              className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Register
            </button>
            {registrationMessage && (
              <div className="mt-4 text-green-500">{registrationMessage}</div>
            )}
          </div>
        )}
      </div>

      <div className="fixed top-4 right-4">
        <div className="relative">
          <div onClick={() => setShowLogout(!showLogout)} className="flex items-center cursor-pointer">
            <FaUserCircle className="text-3xl text-gray-600 mr-2" />
            <span className="text-lg font-medium">Vandana</span>
          </div>
          {showLogout && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRegistration;