/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'

import navSlice from './slice/navSlice'

export default configureStore({
   reducer: {
      nav: navSlice,
   },
})