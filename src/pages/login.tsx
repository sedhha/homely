import Client from '@fb-client';
import React, { useEffect, useState } from 'react';

export default function Login() {
  const [status, setStatus] = useState({ message: '', show: false });
  const [mounted, setMounted] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => setMounted(false);
  }, []);
  const registerHandler = () => {
    setLoading(true);
    Client.createNewUser(email, password).then((response) => {
      if (mounted) {
        if (response.error) {
          setStatus({ message: response.message, show: true });
          setLoading(false);
        } else {
          setStatus({ message: 'User created successfully', show: true });
          setLoading(false);
        }
      }
    });
  };

  const signInUserHandler = () => {
    setLoading(true);
    Client.signInUser(email, password).then((response) => {
      if (mounted) {
        if (response.error) {
          setStatus({ message: response.message, show: true });
          setLoading(false);
        } else {
          setStatus({ message: 'User signed in successfully', show: true });
          setLoading(false);
        }
      }
    });
  };
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <h1>Firebase Example Usage</h1>
      <input
        placeholder='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signInUserHandler}>Login</button>
      <br />
      <button onClick={registerHandler}>Sign Up</button>
      <br />

      {status.show && <p>{status.message}</p>}
    </div>
  );
}
