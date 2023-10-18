import React, { useState } from 'react';
import Navbar from '../component/navbar';

const Signup = () => {
    // Define state variables for the form fields
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const FormData = {
        name,
        subject,
        email,
        message,
    };

    const handlesignup = async (data) => {
        try {
            const response = await fetch('https://blissmothies.onrender.com/blissmothies/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response:', data);
                alert("Message sent")
                setName('')
                setSubject('')
                setEmail('')
                setMessage('')
            } else {
                console.error('Failed to create user.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-wrapper">
            <Navbar />
            <form>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    handlesignup(FormData)
                }}
                >
                    Send message
                </button>
            </form>
        </div >
    );
};

export default Signup;
