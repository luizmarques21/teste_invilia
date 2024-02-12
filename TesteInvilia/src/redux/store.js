import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./wordReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, wordReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
        }
    })
});
export const persistor = persistStore(store);