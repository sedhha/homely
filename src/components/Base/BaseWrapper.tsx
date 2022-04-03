import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import Client from '@fb-client';
import { useAppDispatch } from '@redux-store/hooks';
import { updateUser } from '@redux-slices/userSlice';
type Props = {
  Component: JSX.Element;
};

export default function BaseComponent({ Component }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(Client.auth, (user) => {
      if (user !== null) {
        user.getIdToken().then((token) => {
          dispatch(updateUser({ authToken: token }));
        });
      }
    });
  }, [dispatch]);
  return <React.Fragment>{Component}</React.Fragment>;
}
