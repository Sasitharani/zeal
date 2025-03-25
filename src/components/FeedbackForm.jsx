import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Home.css'; // Reuse the same CSS file for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [isFormVisible, setIsFormVisible] = useState(true); // Track form visibility

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show loading button
        emailjs
            .send(
                'service_7sqt0nq', // Replace with your EmailJS Service ID
                'template_rqktgmh', // Replace with your EmailJS Template ID
                {
                    name: formData.name, // Include name
                    email: formData.email, // Include email
                    phone: formData.phone, // Include phone number
                    message: formData.message, // Include message
                },
                'RghE7VjKWDHluwdyd' // Replace with your EmailJS User ID
            )
            .then(
                (result) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your message has been sent successfully.',
                    }).then(() => {
                        setIsFormVisible(false); // Hide form after success
                    });
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to send message. Please try again.',
                    });
                }
            )
            .finally(() => {
                setIsSubmitting(false); // Stop loading button
            });
    };

    if (!isFormVisible) {
        return null; // Hide the form
    }

    return (
        <div className="centered-div">
            <h2 className="text-white">Feedback Form</h2>
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4 p-4 border border-blue-500 rounded-lg text-white"
            >
                <label>
                    <span className="text-white">Name:</span>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="border border-blue-500 rounded p-2 w-full text-black"
                    />
                </label>
                <label>
                    <span className="text-white">Email:</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="border border-blue-500 rounded p-2 w-full text-black"
                    />
                </label>
                <label>
                    <span className="text-white">Phone:</span>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="border border-blue-500 rounded p-2 w-full text-black"
                    />
                </label>
                <label>
                    <span className="text-white">Message:</span>
                    <textarea 
                        name="message" 
                        placeholder="Your message" 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        className="border border-blue-500 rounded p-2 w-full text-black"
                    ></textarea>
                </label>
                <button 
                    type="submit" 
                    className={`bg-blue-500 text-white rounded p-2 hover:bg-blue-600 ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="loader"></span> // Animated loading spinner
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
