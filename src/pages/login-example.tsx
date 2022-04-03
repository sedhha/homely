import Client from '@fb-client';
import {
  firebaseUsers,
  FirebaseUserType,
  IFirebaseClaims,
} from '@homely-interfaces/Firebase/Auth';
import React, { useEffect, useState } from 'react';

import { useAppSelector } from '@redux-store/hooks';

export default function Login() {
  const { authToken } = useAppSelector((state) => state.user);
  const [status, setStatus] = useState({ message: '', show: false });
  const [mounted, setMounted] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => setMounted(false);
  }, []);
  const registerUser = () => {
    setLoading(true);
    Client.registerFirebaseUser(
      email,
      password,
      firebaseUsers.jobSeeker as FirebaseUserType
    ).then((response) => {
      if (response.error) {
        setStatus({ message: response.message, show: true });
        setLoading(false);
      } else {
        setStatus({ message: 'Successfully registered', show: true });
        setLoading(false);
      }
    });
  };
  const signInUserHandler = () => {
    setLoading(true);
    Client.signInUser(email, password).then((response) => {
      setLoading(false);
      if (mounted) {
        if (response.error) {
          setStatus({
            message: response.message,
            show: true,
          });
        } else {
          // To Use Metadata:
          const metadata = response.metadata as IFirebaseClaims;
          // To Check if User is Job Seeker
          // metadata.userType === firebaseUsers.jobSeeker
          //TODO: Disaptch to global state
          setStatus({
            message:
              'User signed in successfully' +
              ' User Type: ' +
              metadata.userType,
            show: true,
          });
        }
      }
    });
  };
  const signOutUserHandler = () => Client.auth.signOut();
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
      <input
        type='date'
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          console.log(new Date(e.target.value).getTime());
        }}
      />
      <br />
      <button onClick={signInUserHandler}>Login</button>
      <br />
      <button onClick={registerUser}>Sign Up</button>
      <br />
      <button onClick={signOutUserHandler}>Sign Out</button>

      {status.show && <p>{status.message}</p>}
    </div>
  );
}
