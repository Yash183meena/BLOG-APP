import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userReducer from './user/userSlice.js';
import {persistReducer,persistStore} from 'redux-persist';
import themeReducer from './theme/themeSlice.js'
import storage from "redux-persist/lib/storage";

const rootReducer=combineReducers({
      user:userReducer,
      theme:themeReducer
});

const persistConfig={
      key:'root',
      storage,
      version:1,
}

//redux-persist ka use karke apn apne jo state hai jaise currentUser usko local storrage me store karwa denge taake page refresh hone ke baad bhi cyrrentUser state null na hokar localstorage me se payload(data) le le aur authorized user ka data currentUSer me ho
const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
      reducer:persistedReducer,
      middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})  
});

export const persistor=persistStore(store);

