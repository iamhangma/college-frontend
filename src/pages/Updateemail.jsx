import React, { useState } from 'react';
import '../styles/UpdateEmail.css'; // Import your CSS file for styling

const UpdateEmail = () => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmNewEmail, setConfirmNewEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to handle the email update functionality
    // For simplicity, we'll just display a message
    setMessage(`Email updated successfully to ${newEmail}`);
    setCurrentEmail(newEmail); // Update current email display after successful update
    setNewEmail('');
    setConfirmNewEmail('');
  };

  return (
    <div className="update-email-container">
      <h2>Update Your Email</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-email">Current Email:</label>
        <input
          type="email"
          id="current-email"
          value={currentEmail}
          disabled
        />
        <label htmlFor="new-email">New Email:</label>
        <input
          type="email"
          id="new-email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
        <label htmlFor="confirm-new-email">Confirm New Email:</label>
        <input
          type="email"
          id="confirm-new-email"
          value={confirmNewEmail}
          onChange={(e) => setConfirmNewEmail(e.target.value)}
          required
        />
        <button type="submit">Update Email</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UpdateEmail;
