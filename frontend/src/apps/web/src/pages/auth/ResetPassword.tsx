import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Richiesta reset password per:', email);
    // Implementazione futura per il reset della password
    setSubmitted(true);
  };

  return (
    <div className="auth-container">
      <h2>Recupera Password</h2>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <p className="info-text">
            Inserisci l'indirizzo email associato al tuo account. Ti invieremo un link per reimpostare la password.
          </p>
          <button type="submit">Invia link di recupero</button>
        </form>
      ) : (
        <div className="success-message">
          <p>
            Se l'indirizzo email è associato a un account, riceverai a breve un'email con le istruzioni per reimpostare la password.
          </p>
        </div>
      )}
      
      <div className="auth-links">
        <Link to="/auth/login">Torna al login</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
