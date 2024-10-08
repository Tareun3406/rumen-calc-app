import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Box sx={{ display: "grid", placeContent: "center", width: "100vw", height: "100vh", minWidth: 781 }}>
        <RouterProvider router={mainRouter}></RouterProvider>
      </Box>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
