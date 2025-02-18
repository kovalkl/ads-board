import {
  AdditionalFieldsType,
  AutoType,
  BaseInfoType,
  RealEstateType,
} from '@/types/formTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  additionalFields: AdditionalFieldsType;
} & BaseInfoType;

const initialState: InitialStateType = {
  name: '',
  description: '',
  location: '',
  type: '',
  additionalFields: {
    realEstate: {} as RealEstateType,
    auto: {} as AutoType,
  },
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

    setRealEstateInfo: (state, action: PayloadAction<RealEstateType>) => {
      if (
        JSON.stringify(state.additionalFields.realEstate) !==
        JSON.stringify(action.payload)
      ) {
        state.additionalFields.realEstate = action.payload;
      }
    },
  },
});

export default FormSlice.reducer;

export const { setBaseInfo, setRealEstateInfo } = FormSlice.actions;
