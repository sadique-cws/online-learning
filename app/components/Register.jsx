"use client"
import React, { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Registration successful
        console.log(data.token); // JWT token received
        // Handle successful registration, e.g., redirect to a success page
        setAlert({ message: data.message, type: 'success' });

      } else {
        console.log(data.message); // Registration failed or user already exists
        // Handle failed registration, e.g., display an error message
        setAlert({ message: data.message, type: 'error' });

      }
    } catch (error) {
      console.error('Registration error:', error);
      setAlert({ message: "Registration Fail Try Again", type: 'error' });

      // Handle registration error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Register
          </button>
        </form>
        {alert && (
        <div
          className={`${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white p-4 mb-4`}
        >
          {alert.message}
        </div>
      )}
      </div>
    </div>
  );
};

export default RegisterPage;
