import { AdditionalFieldType, ItemTypeKeys } from '@/store/types';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  name: string;
  description: string;
  location: string;
  type: ItemTypeKeys | '';
  image?: string;
  additionalFields?: AdditionalFieldType[ItemTypeKeys];
};

const initialState: InitialStateType = {
  name: '',
  description: '',
  location: '',
  type: '',
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
});

export default FormSlice.reducer;
