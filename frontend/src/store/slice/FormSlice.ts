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
      state.type = action.payload.type;

      state.name = action.payload.name;
      state.description = action.payload.description;
      state.location = action.payload.location;
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

    setAutoInfo: (state, action: PayloadAction<AutoType>) => {
      if (
        JSON.stringify(state.additionalFields.auto) !==
        JSON.stringify(action.payload)
      ) {
        state.additionalFields.auto = action.payload;
      }
    },
  },
});

export default FormSlice.reducer;

export const { setBaseInfo, setRealEstateInfo, setType, setAutoInfo } =
  FormSlice.actions;
