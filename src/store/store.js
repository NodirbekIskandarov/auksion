import { configureStore } from '@reduxjs/toolkit'
import propertyDetailReducer from './features/propertyDetailSlice'
import cabinetMenusReducer from './features/cabinetMenusSlice'

export const store = configureStore({
    reducer: {
        propertyDetail: propertyDetailReducer,
        cabinetMenu: cabinetMenusReducer,
    },
})
