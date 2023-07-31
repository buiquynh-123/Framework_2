// import { cartReducer } from "@/reducers/cartReducer";
// import { counterRender } from "@/reducers/counterReducer";
// import { productReducer } from "@/reducers/productReducer";
// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
//   compose,
// } from "redux";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   typeof window === "object" &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const rootReducer = combineReducers({
//   counter: counterRender,
//   products: productReducer,
//   cart: cartReducer,
// });
// const store = createStore(rootReducer, enhancer);
// export default store;

import { productReducer } from "@/slices/Product";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
