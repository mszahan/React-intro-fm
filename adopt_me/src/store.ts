import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './AdoptedPetSlice';

const store = configureStore({
  reducer: {
    adoptedPet,
  },
});

export default store;
