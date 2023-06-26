import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import propertyDetailReducer from './features/propertyDetailSlice'
import cabinetMenusReducer from './features/cabinetMenusSlice'
import languageReducer from './features/languageSlice'
import usernameReducer from './features/userNameSlice'
import toggleReducer from './features/toggleSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedPropertyReducer = persistReducer(
    persistConfig,
    propertyDetailReducer
)
export const store = configureStore({
    reducer: {
        propertyDetail: persistedPropertyReducer,
        cabinetMenu: cabinetMenusReducer,
        language: languageReducer,
        setUsername: usernameReducer,
        toggleValue: toggleReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)
