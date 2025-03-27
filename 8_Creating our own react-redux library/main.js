import react from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const router=createBrowserRouter([
  {
      path:'/',
      element:<App />,
      children:[
        {
          path:'/',
          element:<Home />,
        },
        {
          path:'/cart',
          element:<Cart />,
        }
      ]

  }
])

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
);
