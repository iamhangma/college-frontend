import React, { useState } from 'react';
import '../styles/ForgotPassword.css'; // Import your CSS file for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to handle the forgot password functionality
    // For simplicity, we'll just display a message
    setMessage(`Password reset instructions have been sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
