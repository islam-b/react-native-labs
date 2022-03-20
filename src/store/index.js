import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './slices/books.slice'
import { authReducer } from './slices/auth.slice'
import createSensitiveStorage from "redux-persist-sensitive-storage";
import { persistStore, persistReducer } from 'redux-persist'
import ENV from '../../envrionment.';


const storage = createSensitiveStorage({
    keychainService: ENV.storageKey,
    sharedPreferencesName: ENV.storageKey,
});

const authPersistConfig = {
    key: 'auth',
    storage: storage,
};

export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
})

export const persistor = persistStore(store)