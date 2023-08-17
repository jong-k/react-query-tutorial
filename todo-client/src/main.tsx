import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import Login from "./components/Login/index.tsx";
import "./styles/index.scss";
import { getAuth } from "./api/auth.ts";

const queryClient = new QueryClient();

const authLoader = async () => {
  const value = localStorage.getItem("auth");

  if (value) {
    const authResult = await getAuth(value);
    return authResult;
  } else {
    redirect("/login");
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: authLoader,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
