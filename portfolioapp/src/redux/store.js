import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { curentUser } from './sliceAdmin';
import { worksApi } from './worksAPI';
import { mainInfoAPI } from './mainInfoAPI';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const adminPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['admin'],
};

const rootReduser = combineReducers({
    admin: curentUser.reducer,
    [worksApi.reducerPath]: worksApi.reducer,
    [mainInfoAPI.reducerPath]: mainInfoAPI.reducer,
});

const persistedReducer = persistReducer(adminPersistConfig, rootReduser);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(worksApi.middleware)
            .concat(mainInfoAPI.middleware),
});

export const persistor = persistStore(store);
