import formReducer from '@/store/slice/FormSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
