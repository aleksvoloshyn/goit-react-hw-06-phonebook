// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({ contacts: contactsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// console.log(store);
// export default store;
export default { store, persistor };
