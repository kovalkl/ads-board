import { AdditionalFieldType, BaseInfoType, ItemTypeKeys } from '@/store/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  additionalFields?: AdditionalFieldType[ItemTypeKeys];
} & BaseInfoType;

const initialState: InitialStateType = {
  name: '',
  description: '',
  location: '',
  type: '',
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBaseInfo: (state, action: PayloadAction<BaseInfoType>) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.location = action.payload.location;
      state.type = action.payload.type;
    },
  },
});

export default FormSlice.reducer;

export const { setBaseInfo } = FormSlice.actions;
