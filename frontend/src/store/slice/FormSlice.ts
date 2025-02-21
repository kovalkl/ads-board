import {
  AdditionalFieldsType,
  AutoType,
  BaseInfoType,
  ItemTypeKeys,
  RealEstateType,
  ServiceType,
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
    services: {} as ServiceType,
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

      if (action.payload.image) {
        state.image = action.payload.image;
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

    setAutoInfo: (state, action: PayloadAction<AutoType>) => {
      if (
        JSON.stringify(state.additionalFields.auto) !==
        JSON.stringify(action.payload)
      ) {
        state.additionalFields.auto = action.payload;
      }
    },

    setServicesInfo: (state, action: PayloadAction<ServiceType>) => {
      if (
        JSON.stringify(state.additionalFields.services) !==
        JSON.stringify(action.payload)
      ) {
        state.additionalFields.services = action.payload;
      }
    },
  },
});

export default FormSlice.reducer;

export const {
  setBaseInfo,
  setRealEstateInfo,
  setType,
  setAutoInfo,
  setServicesInfo,
} = FormSlice.actions;
