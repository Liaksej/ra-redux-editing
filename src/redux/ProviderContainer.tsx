"use client";

import { Store } from "redux";
import { AppState } from "@/redux/state";
import configureStore from "@/redux/store";
import { Provider } from "react-redux";

const store: Store<AppState> = configureStore();

export default function ProviderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
