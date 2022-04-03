import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from '@redux-store/store';
import {
  UserState,
  IUploadUserPayload,
} from '@homely-interfaces/redux/User.interface';

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUser: (
      state: UserState,
      action: PayloadAction<IUploadUserPayload>
    ) => {
      const { payload } = action;
      state.isLoggedIn = payload.isLoggedIn ?? state.isLoggedIn;
      state.authToken = payload.authToken ?? state.authToken;
      state.email = payload.email ?? state.email;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
