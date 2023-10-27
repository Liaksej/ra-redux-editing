import { combineReducers, legacy_createStore as createStore } from "redux";
import { appReducer } from "@/redux/appReducer";
import { AppState } from "@/redux/state";
//
// const ReactReduxDevtools =
//   (window as Window).__REDUX_DEVTOOLS_EXTENSION__ &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return createStore(
    combineReducers<AppState>({
      list: appReducer,
    }),
  );
}