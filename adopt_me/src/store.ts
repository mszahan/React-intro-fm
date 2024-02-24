import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './AdoptedPetSlice';
import searchParams from './searchParamSlice';
import { petApi } from './petApiService';

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(petApi.middleware),
});

export default store;
