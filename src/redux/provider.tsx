 
import { Children } from "@util/page-type";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function Providers({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
