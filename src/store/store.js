import { configureStore } from '@reduxjs/toolkit'
import propertyDetailReducer from './features/propertyDetailSlice'
import cabinetMenusReducer from './features/cabinetMenusSlice'
import languageReducer from './features/languageSlice'
import usernameReducer from './features/userNameSlice'

export const store = configureStore({
    reducer: {
        propertyDetail: propertyDetailReducer,
        cabinetMenu: cabinetMenusReducer,
        language: languageReducer,
        setUsername: usernameReducer,
    },
})
