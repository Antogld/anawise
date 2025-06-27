import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login con:', { email, password });
    // Implementazione futura per l'autenticazione
  };

  return (
    <div className="auth-container">
      <h2>Accedi</h2>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Accedi</button>
      </form>
      <div className="auth-links">
        <Link to="/auth/signup">Non hai un account? Registrati</Link>
        <Link to="/auth/reset-password">Password dimenticata?</Link>
      </div>
    </div>
  );
};

export default Login;
