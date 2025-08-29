
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, AsyncState } from '@/shared/types';

interface UserState extends AsyncState<User> {
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    language: string;
  };
}

const initialState: UserState = {
  data: null,
  status: 'idle',
  error: null,
  preferences: {
    theme: 'auto',
    notifications: true,
    language: 'en',
  },
};

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      // Implementation would fetch user profile from API
      return {} as User;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch profile');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePreferences: (
      state,
      action: PayloadAction<Partial<UserState['preferences']>>
    ) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearUserData: (state) => {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { updatePreferences, clearUserData } = userSlice.actions;
export { userSlice };
