"use client";

import { Provider } from "react-redux";
import configureStore from "@/redux/store";
import { Store } from "redux";
import { AppState } from "@/redux/state";
import { App } from "@/components/App";

const store: Store<AppState> = configureStore();

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
