import { combineReducers, legacy_createStore as createStore } from "redux";
import { appReducer } from "@/redux/appReducer";
import { AppState } from "@/redux/state";

export default function configureStore() {
  return createStore(
    combineReducers<AppState>({
      list: appReducer,
    }),
  );
}
