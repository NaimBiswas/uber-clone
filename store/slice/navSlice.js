/* eslint-disable prettier/prettier */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';



export const navSlice = createSlice({
   name: 'nav',
   initialState: {
      origin: null,
      destination: null,
      travelTimeInformation: null,
   },
   reducers: {
      setOrgin: (state, action) => {
         state.origin = action.payload;
      },
      setDestination: (state, action) => {
         state.destination = action.payload;
      },
      setTavelTimeInformation: (state, action) => {
         state.travelTimeInformation = action.payload;
      },
   },
});

export const { setOrgin, setDestination, setTavelTimeInformation } = navSlice.actions

export default navSlice.reducer;
