// UserRegistrationForm.js

import React, { useState } from 'react';

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call a function to handle user registration (send data to the server, etc.)
        registerUser(formData);
    };

    const registerUser = async (userData) => {
        try {
            // Make an API request to register the user (replace with your actual API endpoint)
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('User registered successfully');
                // Redirect or show a success message
            } else {
                console.error('Failed to register user');
                // Handle error (show error message, etc.)
            }
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default UserRegistrationForm;
