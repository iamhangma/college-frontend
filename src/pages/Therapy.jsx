import React from 'react';
import '../App.css';

const TherapyProcess = () => {
  return (
    <div className="therapy-process-container">
      <h2>What is the therapy process?</h2>
      <p>You indicated that you have never had therapy before, that might be helpful as you get ready to begin.</p>
      <h3>What happens next?</h3>
      <ul>
        <li>You will receive a personalized match to a qualified and licensed therapist.</li>
        <li>Your therapist will thoughtfully review what you've shared and reach out to you.</li>
        <li>You can begin communicating with your therapist online, and your therapy process begins.</li>
      </ul>
      <h3>Who will be my therapist?</h3>
      <p>
        We'll look for a personalized therapist match based on your preferences of:
      </p>
      <ul>
        <li>A therapist who has experience treating: Depression, Stress and anxiety, Pregnancy and childbirth</li>
      </ul>
      <h3>How do I talk to my therapist?</h3>
      <p>
        You have many options for how you choose to communicate with your therapist. You can send audio, video, or text messages to your therapist at any time in the messaging room. You can also schedule weekly live sessions (30 to 45 min) with your therapist to communicate via phone, video, or live chat.
      </p>
      <h3>What if I don't like the therapist that was matched to me?</h3>
      <p>
        You can ask to be matched to a different therapist. Manashanti has therapists with different qualifications and areas of expertise that are available based upon your location, preferences, and therapist availability.
      </p>
    </div>
 );
};

const TherapyPayment = () => {
  return (
    <div className="therapy-payment-container">
      <h2>Cost: Original price: $50 Current price: $40 USD per week (charged every 4 weeks) -cancel anytime. Includes a weekly live session and text, audio and video messaging whenever you like. Message your therapist anytime, anywhere. No scheduling is required. Pick a time on your therapist's calendar to have a real-time session over chat, phone, or video.</h2>
      <h3>Reduced Fee (student): $50 USD off.</h3>
      <p>Your card will be charged the original price: $150 USD.</p>
      <h2>Enter payment information to start:</h2>
      <div className="payment-options">
        <div className="payment-option">
          <img src="credit-card.png" alt="Credit Card" />
          <p>Credit card</p>
        </div>
        <div className="payment-option">
          <img src="esewa.png" alt="eSewa" />
          <p>eSewa</p>
        </div>
        <div className="payment-option">
          <img src="fonepay.png" alt="Fonepay" />
          <p>Fonepay</p>
        </div>
      </div>
      <div className="card-number-container">
        <label htmlFor="card-number">Card number</label>
        <input type="text" id="card-number" name="card-number" placeholder="MM/YY CVC" />
      </div>
      <div className="secure-transaction">
        <button className="start-therapy-button">Start therapy</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <TherapyPayment />
      <TherapyProcess />
    </div>
  );
};

export default App;