// TOOLKIT REDUCERS

// import { createReducer } from '@reduxjs/toolkit';

// import { addContact, deleteContact, filterValue } from './actions';

// const itemsInitialState = [];

// const filterInitialState = '';

// const itemsReducer = createReducer(itemsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload.id);
//   },
// });

// const filterReducer = createReducer(filterInitialState, {
//   [filterValue]: (state, action) => {
//     return (state = action.payload);
//   },
// });

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

// VANILLA REDUX

// const initialState = {};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };