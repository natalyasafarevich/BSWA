import { User } from '@/shared/types/user/UserType';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    initialData: {},
  },

  reducers: (create) => ({
    setInitialUserData: create.reducer<{ initialData: User }>((state, action) => {
      state.initialData = action.payload.initialData;
    }),
  }),
  selectors: {
    selectInitialData: (state) => state.initialData,
  },
});

export const { setInitialUserData } = userSlice.actions;
export const { selectInitialData } = userSlice.selectors;
export const userReducer = userSlice.reducer;
