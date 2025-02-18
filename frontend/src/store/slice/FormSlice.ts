import {
  AdditionalFieldsType,
  AutoType,
  BaseInfoType,
  ItemTypeKeys,
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
      if (state.name !== action.payload.name) {
        state.name = action.payload.name;
      }

      if (state.description !== action.payload.description) {
        state.description = action.payload.description;
      }

      if (state.location !== action.payload.location) {
        state.location = action.payload.location;
      }
    },

    setType: (state, action: PayloadAction<ItemTypeKeys>) => {
      if (state.type !== action.payload) {
        state.type = action.payload;

        state.additionalFields = initialState.additionalFields;
      }
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

export const { setBaseInfo, setRealEstateInfo, setType } = FormSlice.actions;
